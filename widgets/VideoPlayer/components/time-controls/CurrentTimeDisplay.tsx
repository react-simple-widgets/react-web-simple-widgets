import * as React from "react";
import classNames from "classnames";

import { formatTime } from "../../utils";

type Props = {
    player?: Record<string, any>,
    className?: string,
    order?: number,
};

function CurrentTimeDisplay({ player: { currentTime, duration }, className }: Props) {
    const formattedTime = formatTime(currentTime, duration);
    return (
        <div
            className={classNames(
                "video-react-current-time video-react-time-control video-react-control",
                className
            )}
        >
            <div className="video-react-current-time-display" aria-live="off">
                <span className="video-react-control-text">Current Time </span>
                {formattedTime}
            </div>
        </div>
    );
}

CurrentTimeDisplay.displayName = "CurrentTimeDisplay";

export default CurrentTimeDisplay;
