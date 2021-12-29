import * as React from "react";
import ThumbnailGalleryComponent from "./ThumbnailGallery";
import CaptionContainerComponent from "./Caption";
import { useSwipeable } from "react-swipeable";
import { useDebouncedCallback } from "use-debounce";
import subscribe from "subscribe-event";
import { AnimatePresence } from "framer-motion";
import { useOnClickOutside, useSizes } from "../../../hooks";
import ImageLoad from "./ImageComponent";
import { StyledContainer } from "../../../styles/ContainerStyles";
import {
    StyledElementContainer,
    StyledElementWrapper
} from "../../../styles/ElementContainerStyles";

type SettingsProps = {
    boxShadow?: string,
    disablePanzoom?: boolean,
    disableWheelControls?: boolean,
    slideAnimationType?: string,
    slideSpringValues?: any[],
    slideTransitionSpeed?: number,
    slideTransitionTimingFunction?:
    string |
    any[]
};

type CaptionProps = {
    captionAlignment?: string,
    captionColor?: string,
    captionFontFamily?: string,
    captionFontSize?: string,
    captionFontStyle?: string,
    captionFontWeight?:
    number |
    string,
    captionContainerPadding?: string,
    captionTextTransform?: string,
    showCaption?: boolean
};

type ThumbnailsProps = {
    showThumbnails?: boolean,
    thumbnailsOpacity?: number,
    thumbnailsPosition?: string,
    thumbnailsSize?: any[]
};
type OptionsProps = {
    settings?: SettingsProps,
    caption?: CaptionProps,
    thumbnails?: ThumbnailsProps,
};
type Props = {
    caption?: string,
    direction?: string,
    elements?: any[],
    handleCloseLightbox?: (evt?) => void,
    handleCurrentElement?: (evt?) => void,
    handleNextElement?: (evt?) => void,
    handlePanzoom?: (evt?) => void,
    handlePrevElement?: (evt?) => void,
    height?: number,
    hideThumbnails?: boolean,
    id?: string,
    options?: OptionsProps,
    panzoomEnabled?: boolean,
    showControls?: boolean,
    source?: string | any,
    captionRef?: React.RefObject<any>,
    thumbnailsRef?: React.RefObject<any>,
    thumbnailsOpacity?: number,
    type?: string,
    width?: number,
};

function ContainerComponent({
    caption,
    direction,
    elements,
    handleCurrentElement,
    handleCloseLightbox,
    handleNextElement,
    handlePanzoom,
    handlePrevElement,
    height: elementHeight,
    hideThumbnails,
    id,
    options,
    panzoomEnabled,
    source,
    thumbnailsRef,
    captionRef,
    width: elementWidth
}: Props) {
    const { settings, thumbnails, caption: captionSettings } = options;

    const [captionDivSizes] = useSizes(captionRef);
    const [thumbnailsDivSizes] = useSizes(thumbnailsRef);

    // Ref for the Content
    const SRLLightboxContentRef = React.useRef();

    // @ts-ignore
    const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    const POSITIVE_X = isIE11 ? 1000 : "100%";
    const NEGATIVE_X = isIE11 ? -1000 : "-100%";

    const variants = {
        slideIn: (direction) => {
            return {
                x:
                    direction === undefined
                        ? 0
                        : direction === "next"
                            ? POSITIVE_X
                            : NEGATIVE_X,
                transition: {
                    ease: settings.slideTransitionTimingFunction
                }
            };
        },
        slideOut: (direction) => {
            return {
                x: direction === "previous" ? POSITIVE_X : NEGATIVE_X,
                transition: {
                    ease: settings.slideTransitionTimingFunction
                }
            };
        },
        fadeIn: {
            opacity: 0,
            transition: {
                ease: settings.slideTransitionTimingFunction
            }
        },
        fadeOut: {
            opacity: 0,
            transition: {
                ease: settings.slideTransitionTimingFunction
            }
        },
        bothIn: (direction) => {
            return {
                opacity: 1,
                x: direction === undefined ? "0" : direction === "next" ? 1000 : -1000,
                transition: {
                    ease: settings.slideTransitionTimingFunction
                }
            };
        },
        bothOut: (direction) => {
            return {
                opacity: 0,
                x: direction === "previous" ? 1000 : -1000,
                transition: {
                    ease: settings.slideTransitionTimingFunction
                }
            };
        },
        center: {
            x: 0,
            opacity: 1
        }
    };

    // Swipe Handlers
    const handlers = useSwipeable({
        onSwipedLeft: () => handleNextElement(id),
        onSwipedRight: () => handlePrevElement(id),
        delta: panzoomEnabled ? 500 : 90, // min distance(px) before a swipe starts
        preventDefaultTouchmoveEvent: true, // preventDefault on touchmove, *See Details*
        trackTouch: true, // track touch input
        trackMouse: false
    });

    // Debounce callback
    const handleScrollWheel = useDebouncedCallback(
        // function
        (value) => {
            if (value > 0) {
                handleNextElement(id);
            } else if (value < 0) {
                handlePrevElement(id);
            }
        },
        // delay in ms
        150
    );

    React.useEffect(() => {
        // Handle scrollwheel
        if (!panzoomEnabled && !settings.disableWheelControls) {
            const addWheelListener = subscribe(document, "wheel", (e) =>
                handleScrollWheel(e.deltaY)
            );
            return () => {
                addWheelListener();
            };
        }
    }, [handleScrollWheel, panzoomEnabled, settings.disableWheelControls]);

    // UseOnClickOutside
    useOnClickOutside(SRLLightboxContentRef, () => handleCloseLightbox());

    // // Check if it's an image to load the right content
    // const isImage = /\.(gif|jpg|jpeg|tiff|png|webp)$/i.test(source)

    // Light-box captions options
    const captionOptions = {
        captionAlignment: options.caption.captionAlignment,
        captionColor: options.caption.captionColor,
        captionContainerPadding: options.caption.captionContainerPadding,
        captionFontFamily: options.caption.captionFontFamily,
        captionFontSize: options.caption.captionFontSize,
        captionFontStyle: options.caption.captionFontStyle,
        captionFontWeight: options.caption.captionFontWeight,
        captionTextTransform: options.caption.captionTextTransform
    };

    return (
        <StyledContainer
            className="SRLContainer"
            ref={SRLLightboxContentRef}
            thumbnailsPosition={thumbnails.thumbnailsPosition}
            showCaption={captionSettings.showCaption}
            hideThumbnails={hideThumbnails}
        >
            <StyledElementContainer
                thumbnailsPosition={thumbnails.thumbnailsPosition}
                // showThumbnails is the "setting" passed from the user to the context to completely hide the thumbnails
                showThumbnails={thumbnails.showThumbnails}
                // hideThumbnails is the button that shows and hides the thumbnails on the go
                hideThumbnails={hideThumbnails}
                showCaption={captionSettings.showCaption}
                className="SRLElementContainer"
                captionDivSizes={captionDivSizes}
                thumbnailsDivSizes={thumbnailsDivSizes}
                {...handlers}
            >
                {/* @ts-ignore */}
                <AnimatePresence className="SRLAnimatePresence" custom={direction}>
                    <StyledElementWrapper
                        variants={variants}
                        custom={direction}
                        initial={
                            settings.slideAnimationType === "slide"
                                ? "slideIn"
                                : settings.slideAnimationType === "both"
                                    ? "bothIn"
                                    : "fadeIn"
                        }
                        animate="center"
                        exit={
                            settings.slideAnimationType === "slide"
                                ? "slideOut"
                                : settings.slideAnimationType === "both"
                                    ? "bothOut"
                                    : "fadeOut"
                        }
                        className="SRLElementWrapper"
                        key={id || 0}
                        transition={{
                            x: {
                                type: "spring",
                                stiffness: settings.slideSpringValues[0],
                                damping: settings.slideSpringValues[1]
                            },
                            opacity: { duration: settings.slideTransitionSpeed }
                        }}
                    >
                        <ImageLoad
                            disablePanzoom={settings.disablePanzoom}
                            panzoomEnabled={panzoomEnabled}
                            handlePanzoom={handlePanzoom}
                            containerRef={SRLLightboxContentRef}
                            imgHeight={elementHeight}
                            imgWidth={elementWidth}
                            src={source}
                            caption={caption}
                            boxShadow={settings.boxShadow}
                        />
                    </StyledElementWrapper>
                </AnimatePresence>
            </StyledElementContainer>

            {captionSettings.showCaption && (
                <CaptionContainerComponent
                    id={id}
                    thumbnailsPosition={thumbnails.thumbnailsPosition}
                    captionOptions={captionOptions}
                    caption={caption}
                    captionRef={captionRef as any}
                />
            )}

            {thumbnails.showThumbnails && !hideThumbnails && (
                <ThumbnailGalleryComponent
                    handleCurrentElement={handleCurrentElement}
                    thumbnails={thumbnails}
                    currentId={id}
                    elements={elements || []}
                    thumbnailsRef={thumbnailsRef as any}
                />
            )}
        </StyledContainer>
    );
}

export default ContainerComponent;
