import * as React from "react";
import { storiesOf } from "@storybook/react";
import LightboxProvider, { LightboxWrapper } from "react-web-simple-widgets/widgets/SimpleLightbox";

const DefaultExample = (props) => {

    return (
        <>
            <LightboxProvider>
                <LightboxWrapper>
                    <a href="https://via.placeholder.com/350x150">
                        <img src="https://via.placeholder.com/350x150" alt="Umbrella" />
                    </a>
                    <a href="https://via.placeholder.com/350x150">
                        <img src="https://via.placeholder.com/350x150" alt="Blue sky" />
                    </a>
                    <a href="https://via.placeholder.com/350x150">
                        <img src="https://via.placeholder.com/350x150" alt="Umbrella" />
                    </a>
                    <a href="https://via.placeholder.com/350x150">
                        <img src="https://via.placeholder.com/350x150" alt="Blue sky" />
                    </a>
                    <a href="https://via.placeholder.com/350x150">
                        <img src="https://via.placeholder.com/350x150" alt="Umbrella" />
                    </a>
                </LightboxWrapper>
            </LightboxProvider>
        </>
    );
};

const PlaygroundExample = (props) => {

    return (
        <>
        </>
    );
};

storiesOf("SimpleLightbox", module)
    .add("Default", () => <DefaultExample />)
    .add("Playground", () => <PlaygroundExample />);
