import React from "react";
import classNames from "classnames";

type Props = {
    player?: Record<string, any>,
    className?: string,
    order?: number,
};

export default function LoadingSpinner({ player, className }: Props) {
    if (player.error) {
        return null;
    }
    return (
        <div className={classNames("video-react-loading-spinner", className)} />
    );
}

LoadingSpinner.displayName = "LoadingSpinner";
