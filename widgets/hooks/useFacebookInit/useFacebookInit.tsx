import * as React from "react";

type Props = {
    appId: string,
}

const useFacebookInit = (props: Props) => {
    const {
        appId,
    } = props;

    const [fbSdkLoaded, setFbSdkLoaded] = React.useState(false);

    React.useEffect(() => {
        setupFacebook();
    }, []);

    const setupFacebook = () => {
        if (document.getElementById("facebook-jssdk")) {
            setFbSdkLoaded(true);
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
            setFbSdkLoaded(true);
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

    return {
        fbSdkLoaded,
        // @ts-ignore
        fbsdk: window?.FB,
    };
};

export default useFacebookInit;
