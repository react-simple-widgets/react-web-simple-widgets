import * as React from "react";

type Props = {
    actions?: Record<string, any>,
    className?: string,
    seconds?: 5 | 10 | 30,
    order?: number,
};

const defaultProps = {
    seconds: 10
};

export default (mode) => {

    class ForwardReplayControl extends React.Component<Props> {

        static defaultProps = defaultProps;

        button;

        constructor(props, context) {
            super(props, context);
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
            const { actions, seconds } = this.props;
            // Depends mode to implement different actions
            if (mode === "forward") {
                actions.forward(seconds);
            } else {
                actions.replay(seconds);
            }
        }

        render() {
            const { seconds, className } = this.props;
            const classNames = [
                "video-react-control",
                "video-react-button",
                "video-react-icon"
            ];
            classNames.push(
                `video-react-icon-${mode}-${seconds}`,
                `video-react-${mode}-control`
            );
            if (className) {
                classNames.push(className);
            }
            return (
                <button
                    ref={(c) => {
                        this.button = c;
                    }}
                    className={classNames.join(" ")}
                    type="button"
                    onClick={this.handleClick}
                >
                    <span className="video-react-control-text">{`${mode} ${seconds} seconds`}</span>
                </button>
            );
        }
    }
    
    return ForwardReplayControl;
};
