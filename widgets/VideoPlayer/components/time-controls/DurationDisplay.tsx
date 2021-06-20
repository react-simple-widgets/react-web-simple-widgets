import * as React from "react";
import classNames from "classnames";

import { formatTime } from "../../utils";

type Props = {
    player?: Record<string, any>,
    className?: string,
    order?: number,
};

function DurationDisplay({ player: { duration }, className }: Props) {
    const formattedTime = formatTime(duration);
    return (
        <div
            className={classNames(
                className,
                "video-react-duration video-react-time-control video-react-control"
            )}
        >
            <div className="video-react-duration-display" aria-live="off">
                <span className="video-react-control-text">Duration Time </span>
                {formattedTime}
            </div>
        </div>
    );
}

DurationDisplay.displayName = "DurationDisplay";

export default DurationDisplay;
