import * as React from "react";
import {
    StyledImage,
    StyledPanzoomedImage
} from "../../../../styles/ElementContainerStyles";
import LoadingIndicator from "../LoadingIndicator";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { AnimatePresence } from "framer-motion";

type Props = {
    handlePanzoom?: (evt?) => void,
    src?: string,
    caption?: string,
    disablePanzoom?: boolean,
    boxShadow?: string,
    panzoomEnabled?: boolean,
    containerRef?: any,
    imgWidth?: number,
    imgHeight?: number
  }

const ImageLoad = React.memo(
    ({
        src,
        caption,
        disablePanzoom,
        handlePanzoom,
        panzoomEnabled,
        boxShadow,
        imgHeight,
        imgWidth
    }: Props) => {
        const [loading, setLoading] = React.useState(true);

        function handleTouchStart(e) {
            if (e.touches.length > 1 && !panzoomEnabled && e.cancelable) {
                e.preventDefault();
                handlePanzoom(true);
            }
        }

        React.useEffect(() => {
            const imageToLoad = new Image();
            imageToLoad.src = src;
            imageToLoad.onload = () => {
                // When image is loaded set loading to false
                setLoading(false);
            };
        }, [src]);

        React.useEffect(() => {
            document.addEventListener("touchstart", handleTouchStart, {
                passive: false
            });

            return () => {
                document.addEventListener("touchstart", handleTouchStart, {
                    passive: false
                });
            };
        }, []);

        const content = loading ? (
            <LoadingIndicator />
        ) : !panzoomEnabled ? (
            <StyledImage
                src={src}
                className="SRLImage"
                disablePanzoom={disablePanzoom}
                onClick={() => handlePanzoom(true)}
                alt={caption}
                boxShadow={boxShadow}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeInOut" }}
                width={imgWidth}
                height={imgHeight}
            />
        ) : (
            <TransformWrapper
                maxScale={6}
                minScale={0.5}
                wheel={{ step: 0.5 }}
                zoomAnimation={{ animationType: "easeInOutQuad" }}
            >
                <TransformComponent>
                    <StyledPanzoomedImage
                        src={src}
                        className="SRLImage SRLImageZoomed"
                        alt={caption}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeInOut" }}
                    />
                </TransformComponent>
            </TransformWrapper>
        );

        return <AnimatePresence>{content}</AnimatePresence>;
    }
);

export default ImageLoad;

ImageLoad.displayName = "ImageLoad";
