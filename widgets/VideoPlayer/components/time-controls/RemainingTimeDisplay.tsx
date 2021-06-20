import * as React from "react";
import classNames from "classnames";

import { formatTime } from "../../utils";

type Props = {
    player?: Record<string, any>,
    className?: string,
    order?: number,
};

function RemainingTimeDisplay({
    player: { currentTime, duration },
    className
}: Props) {
    const remainingTime = duration - currentTime;
    const formattedTime = formatTime(remainingTime);
    return (
        <div
            className={classNames(
                "video-react-remaining-time video-react-time-control video-react-control",
                className
            )}
        >
            <div className="video-react-remaining-time-display" aria-live="off">
                <span className="video-react-control-text">Remaining Time </span>
                {`-${formattedTime}`}
            </div>
        </div>
    );
}

RemainingTimeDisplay.displayName = "RemainingTimeDisplay";

export default RemainingTimeDisplay;
