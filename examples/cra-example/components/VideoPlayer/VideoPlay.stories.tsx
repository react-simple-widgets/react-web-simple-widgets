import * as React from "react";
import { storiesOf } from "@storybook/react";
import VideoPlayer from "react-web-simple-widgets/widgets/VideoPlayer";

const VideoPlayerExample = () => {

    return (
        <VideoPlayer>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </VideoPlayer>
    )
}

storiesOf("VideoPlayer", module)
    .add("Default", () => {
        return (
            <VideoPlayerExample />
        )
    })
    