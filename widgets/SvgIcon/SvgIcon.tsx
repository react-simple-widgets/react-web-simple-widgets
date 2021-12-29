import * as React from "react";

type Props = {
    icon: React.ReactElement,

    size?: number,

    color?: string,

    outline?: boolean,

    direction?: string,

    style?: React.CSSProperties;
};

const SvgIcon = ({
    icon: Icon,
    color,
    ...rest
}: Props) => {
    const size = rest.size || 24;
    const outline = rest.outline || false;

    const colorStyle = outline ? {
        stroke: color,
    } : {
        fill: color,
    };

    return (
        // @ts-ignore
        <Icon
            {...rest}
            {...colorStyle}
            width={size}
            height={size}
        />
    );
};

SvgIcon.defaultProps = {
    direction: "ltr",
};

export default SvgIcon;
