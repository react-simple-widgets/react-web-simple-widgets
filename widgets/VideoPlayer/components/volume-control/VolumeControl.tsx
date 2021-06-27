import * as React from "react";
import classNames from "classnames";

import VolumeBar from "./VolumeBar";

type Props = {
    className?: string,
};

export default function VolumeControl({ className, ...rest }: Props) {
    return (
        <div
            className={classNames(
                className,
                "video-react-volume-control video-react-control"
            )}
        >
            <VolumeBar {...rest} />
        </div>
    );
}

VolumeControl.displayName = "VolumeControl";
