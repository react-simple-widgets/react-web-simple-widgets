import * as React from "react";
import classNames from "classnames";

type Props = {
    actions?: Record<string, any>,
    player?: Record<string, any>,
    className?: string,
    order?: number,
};

export default class PlayToggle extends React.Component<Props> {

    static displayName = "PlayToggle";

    button;

    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { actions, player } = this.props;
        if (player.paused) {
            actions.play();
        } else {
            actions.pause();
        }
    }

    render() {
        const { player, className } = this.props;
        const controlText = player.paused ? "Play" : "Pause";

        return (
            <button
                ref={(c) => {
                    this.button = c;
                }}
                className={classNames(className, {
                    "video-react-play-control": true,
                    "video-react-control": true,
                    "video-react-button": true,
                    "video-react-paused": player.paused,
                    "video-react-playing": !player.paused
                })}
                type="button"
                tabIndex={0}
                onClick={this.handleClick}
            >
                <span className="video-react-control-text">{controlText}</span>
            </button>
        );
    }
}
