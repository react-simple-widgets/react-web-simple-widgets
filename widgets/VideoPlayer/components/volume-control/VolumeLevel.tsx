import * as React from "react";
import classNames from "classnames";

type Props = {
    percentage?: string,
    vertical?: boolean,
    className?: string
};

const defaultProps = {
    percentage: "100%",
    vertical: false
};

function VolumeLevel({ percentage, vertical, className }: Props) {
    const style = {} as any;
    if (vertical) {
        style.height = percentage;
    } else {
        style.width = percentage;
    }

    return (
        <div
            className={classNames(className, "video-react-volume-level")}
            style={style}
        >
            <span className="video-react-control-text" />
        </div>
    );
}

VolumeLevel.defaultProps = defaultProps;
VolumeLevel.displayName = "VolumeLevel";

export default VolumeLevel;
