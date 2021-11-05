import * as React from "react";
const getParamsFromObject = params => "?" + Object.keys(params)
    .map(param => `${param}=${encodeURIComponent(params[param])}`)
    .join("&");

const decodeParamForKey = (paramString, key) => {
    return decodeURIComponent(
        paramString.replace(
            new RegExp(
                "^(?:.*[&\\?]" +
            // encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") +
            encodeURIComponent(key).replace(/[.+*]/g, "\\$&") +
            "(?:\\=([^&]*))?)?.*$", "i"
            ),
            "$1"
        )
    );
};

type Props = {
    appId: string,
    onSuccess?: (evt?) => void,
    isDisabled?: boolean,
    xfbml?: boolean,
    cookie?: boolean,
    authType?: string,
    scope?: string,
    state?: string,
    responseType?: string,
    returnScopes?: boolean,
    redirectUri?: string,
    autoLoad?: boolean,
    disableMobileRedirect?: boolean,
    isMobile?: boolean,
    fields?: string,
    version?: string,
    language?: string,
    onClick?: (evt?) => void,
    onFailure?: (evt?) => void,
};

const useFacebookInit = (props: Props) => {
    const {
        appId,
        onSuccess,
        onFailure,
        autoLoad,
        scope,
        onClick,
        returnScopes,
        responseType,
        redirectUri,
        disableMobileRedirect,
        authType,
        state,
        isDisabled,
    } = props;

    const [isSdkLoaded, setIsSdkLoaded] = React.useState(false);
    const [isProcessing, setIsProcessing] = React.useState(false);

    React.useEffect(() => {
        setupFacebook();
    }, []);

    const setupFacebook = () => {
        if (document.getElementById("facebook-jssdk")) {
            setIsSdkLoaded(true);
            return;
        }
        setFbAsyncInit();
        loadSdkAsynchronously();
        createFbRoot();
    };

    const setFbAsyncInit = () => {
        // @ts-ignore
        window.fbAsyncInit = () => {
            // @ts-ignore
            window.FB.init({
                appId,
                autoLogAppEvents: true,
                xfbml: false,
                version: "v6.0",
            });
            setIsSdkLoaded(true);
        };
    };

    const loadSdkAsynchronously = () => {
        ((d, s, id) => {
            const element = d.getElementsByTagName(s)[0];
            const fjs = element;
            let js = element;
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            // @ts-ignore
            js.src = "https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v6.0&autoLogAppEvents=1";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk");
    };

    const createFbRoot = () => {
        let fbRoot = document.getElementById("fb-root");
        if (!fbRoot) {
            fbRoot = document.createElement("div");
            fbRoot.id = "fb-root";
            document.body.appendChild(fbRoot);
        }
    };

    const isRedirectedFromFb = () => {
        const params = window.location.search;
        return (
            decodeParamForKey(params, "state") === "facebookdirect" && (decodeParamForKey(params, "code") ||
                decodeParamForKey(params, "granted_scopes"))
        );
    };

    const responseApi = (authResponse) => {
        // @ts-ignore
        window.FB.api("/me", { locale: this.props.language, fields: this.props.fields }, (me) => {
            Object.assign(me, authResponse);
            if (onSuccess) {
                onSuccess(me);
            }
        });
    };

    const checkLoginState = (response) => {
        setIsProcessing(false);
        if (response.authResponse) {
            responseApi(response.authResponse);
        } else {
            if (onFailure) {
                onFailure({ status: response.status });
            } else {
                if (onSuccess) {
                    onSuccess({ status: response.status });
                }
            }
        }
    };

    const checkLoginAfterRefresh = (response) => {
        if (response.status === "connected") {
            checkLoginState(response);
        } else {
            // @ts-ignore
            window.FB.login(loginResponse => checkLoginState(loginResponse), true);
        }
    };

    const fbLogin = (e?) => {
        if (!isSdkLoaded || isProcessing || isDisabled) {
            return;
        }
        setIsProcessing(true);

        if (typeof onClick === "function") {
            onClick(e);
            if (e.defaultPrevented) {
                setIsProcessing(false);
                return;
            }
        }

        const params = {
            client_id: appId,
            redirect_uri: redirectUri,
            state,
            return_scopes: returnScopes,
            scope,
            response_type: responseType,
            auth_type: authType,
        };

        if (props.isMobile && !disableMobileRedirect) {
            window.location.href = `https://www.facebook.com/dialog/oauth${getParamsFromObject(params)}`;
        } else {
            // @ts-ignore
            if (!window.FB) {
                if (props.onFailure) {
                    props.onFailure({ status: "facebookNotLoaded" });
                }

                return;
            }

            // @ts-ignore
            window.FB.getLoginStatus(response => {
                if (response.status === "connected") {
                    checkLoginState(response);
                } else {
                    // @ts-ignore
                    window.FB.login(this.checkLoginState, { scope, return_scopes: returnScopes, auth_type: params.auth_type });
                }
            });
        }
    };

    React.useEffect(() => {
        if (isSdkLoaded) {
            if (autoLoad || isRedirectedFromFb()) {
                // @ts-ignore
                window.FB.getLoginStatus(checkLoginAfterRefresh);
                // fbLogin();
            }
        }
    }, [isSdkLoaded]);

    return {
        isSdkLoaded,
        fbLogin,
        // @ts-ignore
        // fbsdk: window?.FB,
    };
};

export default useFacebookInit;
