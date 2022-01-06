import * as React from "react";
import {
    READY_LIGHTBOX,
    RESET_LIGHTBOX,
    HANDLE_ELEMENT,
    OPEN_AT_INDEX,
    CLOSE_LIGHTBOX
} from "./actions";

type Props = {
    children: React.ReactNode | React.ReactNode[]
};

const initialState = {
    elements: [],
    isOpened: false,
    isLoaded: false,
    options: {
        buttons: {
            backgroundColor: "rgba(30,30,36,0.8)",
            iconColor: "rgba(255, 255, 255, 0.8)",
            iconPadding: "10px",
            showAutoplayButton: true,
            showCloseButton: true,
            showDownloadButton: true,
            showFullscreenButton: true,
            showNextButton: true,
            showPrevButton: true,
            size: "40px"
        },
        settings: {
            autoplaySpeed: 3000,
            boxShadow: "none",
            disableKeyboardControls: false,
            disablePanzoom: false,
            disableWheelControls: false,
            downloadedFileName: "SRL-image",
            hideControlsAfter: false,
            lightboxTransitionSpeed: 0.3,
            lightboxTransitionTimingFunction: "linear",
            overlayColor: "rgba(30, 30, 30, 0.9)",
            slideAnimationType: "fade",
            slideSpringValues: [300, 50],
            slideTransitionSpeed: 0.6,
            slideTransitionTimingFunction: "linear",
            usingPreact: false
        },
        caption: {
            captionAlignment: "start",
            captionColor: "#FFFFFF",
            captionFontFamily: "inherit",
            captionFontSize: "inherit",
            captionFontStyle: "inherit",
            captionFontWeight: "inherit",
            captionContainerPadding: "20px 0 30px 0",
            captionTextTransform: "inherit",
            showCaption: true
        },
        thumbnails: {
            showThumbnails: true,
            thumbnailsAlignment: "center",
            thumbnailsContainerPadding: "0",
            thumbnailsContainerBackgroundColor: "transparent",
            thumbnailsGap: "0 1px",
            thumbnailsIconColor: "#ffffff",
            thumbnailsPosition: "bottom",
            thumbnailsOpacity: 0.4,
            thumbnailsSize: ["100px", "80px"]
        },
        progressBar: {
            backgroundColor: "#f2f2f2",
            fillColor: "#000000",
            height: "3px",
            showProgressBar: true
        },
        translations: {
            // do something

        },
        icons: {
            // do something

        }
    },
    selectedElement: {
        caption: "",
        height: 0,
        id: 0,
        source: "",
        thumbnail: "",
        width: 0
    },
    callbacks: {
        onCountSlides: (evt?) => {
            // do something
        },
        onSlideChange: (evt?) => {
            // do something
        },
        onLightboxClosed: (evt?) => {
            // do something

        },
        onLightboxOpened: (evt?) => {
            // do something

        }
    },
    dispatch: (value?) => {
        // do something
    }
};

const LightboxCtx = React.createContext(initialState);

const LightboxContextComponent = (props: Props) => {
    // Reducer
    const reducer = (state, action) => {
        switch (action.type) {
            case READY_LIGHTBOX:
                return {
                    ...state,
                    ...action.mergedSettings,
                    elements: action.elements,
                    isLoaded: true
                };
            case RESET_LIGHTBOX: {
                return {
                    ...initialState
                };
            }
            case HANDLE_ELEMENT:
                return {
                    ...state,
                    isOpened: true,
                    selectedElement: {
                        ...action.element
                    }
                };
            case OPEN_AT_INDEX:
                return {
                    ...state,
                    isOpened: true,
                    selectedElement: {
                        ...state.elements[action.index]
                    }
                };
            case CLOSE_LIGHTBOX:
                return {
                    ...state,
                    isOpened: false
                };
            default:
                return state;
        }
    };
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <LightboxCtx.Provider
            value={{
                ...state,
                dispatch
            }}
        >
            {props.children}
        </LightboxCtx.Provider>
    );
};

export { LightboxContextComponent as default, LightboxCtx };
