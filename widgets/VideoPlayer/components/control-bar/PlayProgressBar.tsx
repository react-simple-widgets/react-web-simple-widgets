import * as React from "react";
import classNames from "classnames";

import { formatTime } from "../../utils";

type Props = {
    currentTime?: number,
    duration?: number,
    percentage?: string,
    className?: string
};

// Shows play progress
export default function PlayProgressBar({
    currentTime,
    duration,
    percentage,
    className
}: Props) {
    return (
        <div
            data-current-time={formatTime(currentTime, duration)}
            className={classNames(
                "video-react-play-progress video-react-slider-bar",
                className
            )}
            style={{
                width: percentage
            }}
        >
            <span className="video-react-control-text">
                {`Progress: ${percentage}`}
            </span>
        </div>
    );
}

PlayProgressBar.displayName = "PlayProgressBar";
