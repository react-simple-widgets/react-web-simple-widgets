import * as React from "react";
import PlaybackRateMenuButton from "./PlaybackRateMenuButton";
import { deprecatedWarning } from "../../utils";

export default class PlaybackRate extends React.Component {

    static displayName = "PlaybackRate";

    constructor(props, context) {
        super(props, context);

        deprecatedWarning("PlaybackRate", "PlaybackRateMenuButton");
    }

    render() {
        return <PlaybackRateMenuButton {...this.props} />;
    }
}
