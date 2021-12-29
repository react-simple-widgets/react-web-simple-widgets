import * as React from "react";
import classNames from "classnames";

type Props = {
    manager?: Record<string, any>,
    className?: string,
    order?: number,
};

type State = {
    hidden?: boolean,
    count?: number,
    operation?: Record<string, any>,
};

export default class Bezel extends React.Component<Props, State> {

    static displayName = "Bezel";

    timer;

    state: State = {
        hidden: true,
        operation: {},
    };

    constructor(props, context) {
        super(props, context);

        this.timer = null;
        props.manager.subscribeToOperationStateChange(
            this.handleStateChange.bind(this)
        );
    }

    handleStateChange(state, prevState) {
        if (
            state.count !== prevState.count
      && state.operation.source === "shortcut"
        ) {
            if (this.timer) {
                // previous animation is not finished
                clearTimeout(this.timer); // cancel it
                this.timer = null;
            }

            // show it
            // update operation
            this.setState({
                hidden: false,
                count: state.count,
                operation: state.operation
            });

            // hide it after 0.5s
            this.timer = setTimeout(() => {
                this.setState({
                    hidden: true
                });
                this.timer = null;
            }, 500);
        }
    }

    render() {
    // only displays for shortcut so far
        if (this.state.operation.source !== "shortcut") {
            return null;
        }
        const style = this.state.hidden
            ? {
                display: "none"
            }
            : null;

        return (
            <div
                className={classNames(
                    {
                        "video-react-bezel": true,
                        "video-react-bezel-animation": this.state.count % 2 === 0,
                        "video-react-bezel-animation-alt": this.state.count % 2 === 1
                    },
                    this.props.className
                )}
                style={style}
                role="status"
                aria-label={this.state.operation.action}
            >
                <div
                    className={classNames(
                        "video-react-bezel-icon",
                        `video-react-bezel-icon-${this.state.operation.action}`
                    )}
                />
            </div>
        );
    }
}
