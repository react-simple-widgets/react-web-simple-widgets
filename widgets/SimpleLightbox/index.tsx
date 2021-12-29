import * as React from "react";
import LightboxContextComponent from "./context";
import LightboxWrapper from "./wrapper";
import Lightbox from "./Lightbox";
import { useLightbox } from "./hooks";

type Props = {
    children: React.ReactNode | React.ReactNode[],
};

const LightboxProvider = ({ children }: Props) => {
    return (
        <LightboxContextComponent>
            {children}
            <Lightbox />
        </LightboxContextComponent>
    );
};

export { LightboxProvider as default, useLightbox, LightboxWrapper };
