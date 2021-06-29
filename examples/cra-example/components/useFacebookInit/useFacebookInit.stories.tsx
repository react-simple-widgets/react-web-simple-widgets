import * as React from "react";
import { storiesOf } from "@storybook/react";
import useFacebookInit from "react-web-simple-widgets/widgets/hooks/useFacebookInit";
import { Text } from "react-native-simple-elements/components/Typography";

storiesOf("useFacebookInit", module)
    .add("Default", () => {

        const { fbSdkLoaded, fbsdk } = useFacebookInit({
            appId: "362860461203242",
        });

        const colorScheme = "light";
        const numPosts = 5;
        const href = "https://developers.facebook.com/docs/plugins/comments/#configurator";
        const orderBy = "social";
        const width = 550;
        const mobile = false;

        React.useEffect(() => {
            if (fbSdkLoaded) {
                fbsdk.XFBML.parse(
                    // document.getElementById("fb-comments")
                )
            }
        }, [ fbSdkLoaded ]);

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
                    <Text>Hello</Text>
                </div>
            </>
        )
    })
