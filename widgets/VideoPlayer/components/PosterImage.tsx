import * as React from "react";
import classNames from "classnames";

type Props = {
    poster?: string,
    player?: Record<string, any>,
    actions?: Record<string, any>,
    className?: string,
    order?: number,
};

function PosterImage({
    poster, player, actions, className
}: Props) {
    if (!poster || player.hasStarted) {
        return null;
    }

    return (
        <div
            className={classNames("video-react-poster", className)}
            style={{
                backgroundImage: `url("${poster}")`
            }}
            onClick={() => {
                if (player.paused) {
                    actions.play();
                }
            }}
        />
    );
}

PosterImage.displayName = "PosterImage";

export default PosterImage;
