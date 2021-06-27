import * as React from "react";
import classNames from "classnames";

type Props = {
    actions?: Record<string, any>,
    player?: Record<string, any>,
    position?: string,
    className?: string,
    order?: number,
};

const defaultProps = {
    position: "left"
};

export default class BigPlayButton extends React.Component<Props> {

    static defaultProps = defaultProps;
    static displayName = "BigPlayButton";

    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // do something
    }

    handleClick() {
        const { actions } = this.props;
        actions.play();
    }

    render() {
        const { player, position } = this.props;
        return (
            <button
                className={classNames(
                    "video-react-button",
                    "video-react-big-play-button",
                    `video-react-big-play-button-${position}`,
                    this.props.className,
                    {
                        "big-play-button-hide": player.hasStarted || !player.currentSrc
                    }
                )}
                type="button"
                aria-live="polite"
                tabIndex={0}
                onClick={this.handleClick}
            >
                <span className="video-react-control-text">Play Video</span>
            </button>
        );
    }
}
