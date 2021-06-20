import * as React from "react";
import classNames from "classnames";

type Props = {
    separator?: string,
    className?: string,
    order?: number,
};

export default function TimeDivider({ separator, className }: Props) {
    const separatorText = separator || "/";
    return (
        <div
            className={classNames(
                "video-react-time-control video-react-time-divider",
                className
            )}
            dir="ltr"
        >
            <div>
                <span>{separatorText}</span>
            </div>
        </div>
    );
}

TimeDivider.displayName = "TimeDivider";
