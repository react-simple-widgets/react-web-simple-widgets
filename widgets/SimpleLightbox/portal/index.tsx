import * as React from "react";
import * as ReactDOM from "react-dom";
import { LightboxCtx } from "../context";
import { StyledLightbox } from "../styles/LightboxStyles";

const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
};

type Props = {
    selector?: string,
    isOpened?: boolean,
    children: React.ReactNode | React.ReactNode[],
    className?: string,
}

const Portal = ({ isOpened, children, className }: Props) => {
    const context = React.useContext(LightboxCtx);
    const { options } = context;

    // ClassName comes from the Styled Component
    const modalMarkup = (
        <StyledLightbox
            id="SRLLightbox"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            overlayColor={options.settings.overlayColor}
            transition={{
                duration: options.settings.lightboxTransitionSpeed,
                ease: options.settings.lightboxTransitionTimingFunction
            }}
            className={className}
        >
            {children}
        </StyledLightbox>
    );
    if (!isOpened || typeof window === "undefined") {
        return null;
    }

    return ReactDOM.createPortal(modalMarkup, document.body);
};

export default Portal;
