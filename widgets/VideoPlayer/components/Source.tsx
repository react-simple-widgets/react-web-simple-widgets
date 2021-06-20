import * as React from "react";

type Props = {
    src: string,
    media?: string,
    type?: string,
};

export default function Source(props: Props) {
    const { src, media, type } = props;

    return <source src={src} media={media} type={type} />;
}

Source.displayName = "Source";
