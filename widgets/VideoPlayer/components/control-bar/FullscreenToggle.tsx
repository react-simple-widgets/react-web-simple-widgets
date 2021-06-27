import * as React from "react";
import classNames from "classnames";

type Props = {
    actions?: Record<string, any>,
    player?: Record<string, any>,
    className?: string,
    order?: number,
};

export default class FullscreenToggle extends React.Component<Props> {

    static displayName = "FullscreenToggle";

    button;

    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { player, actions } = this.props;
        actions.toggleFullscreen(player);
    }

    render() {
        const { player, className } = this.props;
        return (
            <button
                className={classNames(
                    className,
                    {
                        "video-react-icon-fullscreen-exit": player.isFullscreen,
                        "video-react-icon-fullscreen": !player.isFullscreen
                    },
                    "video-react-fullscreen-control video-react-control video-react-button video-react-icon"
                )}
                ref={(c) => {
                    this.button = c;
                }}
                type="button"
                tabIndex={0}
                onClick={this.handleClick}
            >
                <span className="video-react-control-text">Non-Fullscreen</span>
            </button>
        );
    }
}
