import * as React from "react";
import { storiesOf } from "@storybook/react";
import useFacebookLogin from "react-web-simple-widgets/widgets/hooks/useFacebookInit";

storiesOf("hooks/useFacebookInit", module)
    .add("Default", () => {

        const { isSdkLoaded } = useFacebookLogin({
            appId: "362860461203242",
            xfbml: true,
        });

        const colorScheme = "light";
        const numPosts = 5;
        const href = "https://developers.facebook.com/docs/plugins/comments/#configurator";
        const orderBy = "social";
        const width = 550;
        const mobile = false;

        React.useEffect(() => {
            if (isSdkLoaded) {
                // @ts-ignore
                window.FB.XFBML.parse(
                    document.getElementById("fb-comments")
                )
            }
        }, [ isSdkLoaded ]);

        return (
            <>
                <div
                    id="fb-comments"
                    className="fb-comments"
                    data-colorscheme={colorScheme}
                    data-numposts={numPosts}
                    data-href={href}
                    data-order-by={orderBy}
                    data-width={width}
                    data-skin={colorScheme}
                    data-mobile={mobile}
                >
                    Hello
                </div>
            </>
        )
    })
