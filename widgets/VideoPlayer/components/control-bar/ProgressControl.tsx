import * as React from "react";
import classNames from "classnames";

import * as Dom from "../../utils/dom";
import SeekBar from "./SeekBar";

type Props = {
    player?: Record<string, any>,
    className?: string,
    order?: number,
};

type State = {
    mouseTime?: Record<string, any>,
};

export default class ProgressControl extends React.Component<Props, State> {

    static displayName = "ProgressControl";

    state: State = {

    };

    seekBar;
    handleMouseMoveThrottle;

    constructor(props, context) {
        super(props, context);

        this.state = {
            mouseTime: {
                time: null,
                position: 0
            }
        };

        this.handleMouseMoveThrottle = this.handleMouseMove.bind(this);
    }

    handleMouseMove(event) {
        if (!event.pageX) {
            return;
        }
        const {
            player: { duration }
        } = this.props;
        const node = this.seekBar;
        const newTime = (Dom.getPointerPosition(node, event) as any).x * duration;
        const position = event.pageX - Dom.findElPosition(node).left;

        this.setState({
            mouseTime: {
                time: newTime,
                position
            }
        });
    }

    render() {
        const { className } = this.props;
        return (
            <div
                onMouseMove={this.handleMouseMoveThrottle}
                className={classNames(
                    "video-react-progress-control video-react-control",
                    className
                )}
            >
                <SeekBar
                    mouseTime={this.state.mouseTime}
                    ref={c => {
                        this.seekBar = c;
                    }}
                    {...this.props}
                />
            </div>
        );
    }
}
