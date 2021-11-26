import * as React from "react";
import Portal from "../portal";
import LightboxGallery from "./LightboxGallery";
import { LightboxCtx } from "../context";
import { AnimatePresence } from "framer-motion";

type Props = {
    context?: any,
};

function Lightbox(props: Props) {
    const context = React.useContext(LightboxCtx);
    const { isOpened, options } = context;
    const isUsingPreact = options.settings.usingPreact;
    const [mousePlugged, setMousePlugged] = React.useState(0);
    const vh = React.useRef(null);

    React.useEffect(() => {
    /* Set a value in the --vh custom property to the root of the document so that we can calculate the height of the light-box
    This is needed due to a mobile issues wit the VH unit https://css-tricks.com/the-trick-to-viewport-units-on-mobile/ */
        function getVH() {
            if (typeof window !== "undefined") {
                vh.current = window.innerHeight * 0.01;
                document.documentElement.style.setProperty("--vh", `${vh.current}px`);
            }
        }
        getVH();

        window.addEventListener("resize", getVH);
        return () => window.removeEventListener("resize", getVH);
    }, []);

    React.useEffect(() => {
        if (
            typeof window !== "undefined" &&
      document.body.scrollHeight > window.innerHeight
        ) {
            setMousePlugged(window.innerWidth - document.documentElement.clientWidth);
        }
    });

    if (isUsingPreact) {
        return (
            <Portal selector="SRLLightbox" isOpened={isOpened}>
                <LightboxGallery
                    {...context}
                    compensateForScrollbar={mousePlugged}
                />
            </Portal>
        );
    } else {
        return (
            <AnimatePresence>
                {isOpened && (
                    <Portal selector="SRLLightbox" isOpened={isOpened}>
                        <LightboxGallery
                            {...context}
                            compensateForScrollbar={mousePlugged}
                        />
                    </Portal>
                )}
            </AnimatePresence>
        );
    }
}

export default Lightbox;
