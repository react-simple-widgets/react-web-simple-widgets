import * as React from "react";
import classNames from "classnames";

import { formatTime } from "../../utils";

type Props = {
    duration?: number,
    mouseTime?: Record<string, any>,
    text?: string,
    className?: string,
};

function MouseTimeDisplay({
    duration, mouseTime, className, text
}: Props) {
    if (!mouseTime.time) {
        return null;
    }

    const time = text || formatTime(mouseTime.time, duration);

    return (
        <div
            className={classNames("video-react-mouse-display", className)}
            style={{
                left: `${mouseTime.position}px`
            }}
            data-current-time={time}
        />
    );
}

MouseTimeDisplay.displayName = "MouseTimeDisplay";

export default MouseTimeDisplay;
