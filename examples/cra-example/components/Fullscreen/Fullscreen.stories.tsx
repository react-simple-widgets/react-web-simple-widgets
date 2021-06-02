import * as React from "react";
import { storiesOf } from "@storybook/react";
import FullScreen, { useFullScreenHandle } from "react-native-styled-simple-widgets/widgets/Fullscreen";
import { Text } from "react-native-styled-paper/components/Typography";
import { Button } from "react-native-styled-paper/components";

const FullscreenExample = (props) => {

    const fullscreenHandle = useFullScreenHandle();

    return (
        <>
            <Button
                onPress={() => {
                    fullscreenHandle.enter()
                }}
            >
                Enter fullscreen
            </Button>
            <FullScreen handle={fullscreenHandle}>
                <Text>Hello</Text>
                <Button
                    onPress={() => {
                        fullscreenHandle.exit()
                    }}
                >
                    Exit fullscreen
                </Button>
            </FullScreen>
        </>
    )
}

storiesOf("Fullscreen", module)
    .add("Default", () => {
        return (
            <FullscreenExample
            />
        )
    })