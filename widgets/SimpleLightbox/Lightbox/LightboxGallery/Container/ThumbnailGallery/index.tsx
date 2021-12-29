import * as React from "react";
import {
    StyledThumbnailGallery,
    StyledThumbnailGalleryImage
} from "../../../../styles/ThumbnailsStyles";
import VideoIcon from "./VideoIcon";

type ThumbnailsProps = {
    thumbnailsAlignment?: string,
    thumbnailsContainerBackgroundColor?: string,
    thumbnailsContainerPadding?: string,
    thumbnailsGap?: string,
    thumbnailsIconColor?: string,
    thumbnailsOpacity?: number,
    thumbnailsPosition?: string,
    thumbnailsSize?: any
};
type Props = {
    elements?: any[],
    handleCurrentElement?: (evt?, e2?) => void,
    currentId?: string,
    thumbnailsRef?: React.RefObject<any>,
    thumbnails?: ThumbnailsProps
};

const ThumbnailGalleryComponent = ({
    elements,
    currentId,
    handleCurrentElement,
    thumbnails,
    thumbnailsRef
}: Props) => {
    const {
        thumbnailsOpacity,
        thumbnailsSize,
        thumbnailsPosition,
        thumbnailsAlignment,
        thumbnailsContainerBackgroundColor,
        thumbnailsContainerPadding,
        thumbnailsGap,
        thumbnailsIconColor
    } = thumbnails;

    // // Ref for the container of the thumbnails
    // const SRLThumbnailsContainerRef = useRef()

    // Ref for the variables that we will use to determine the mouse move drag effect
    const isDown = React.useRef(false);
    const startX = React.useRef(0);
    const startY = React.useRef(0);
    const scrollLeft = React.useRef(0);
    const scrollTop = React.useRef(0);

    /* We need to access the function passed via props inside the useEffect as
  we need some refs (which are undefined outside useEffect). Because the function
  is called on the onClick attribute we need to use a ref */
    const handleCurrentElementRef = React.useRef(null);

    React.useEffect(() => {
    // To make it easier using the ref, we use a short name
        const SRLTCR = thumbnailsRef.current;

        // Target the thumbnail
        const target = document.querySelector(`.SRLThumb${currentId}`);

        if (target) {
            // Get the bounding
            const bcr = target.getBoundingClientRect();

            // If we have to to drag the thumbnails we don't want them centered
            if (
                SRLTCR.scrollWidth > SRLTCR.offsetWidth ||
        SRLTCR.scrollHeight > SRLTCR.offsetHeight
            ) {
                SRLTCR.style.justifyContent = "start";
            } else {
                SRLTCR.style.justifyContent = thumbnailsAlignment || "center";
            }

            // Scroll the thumbnails automatically and sync the light-box
            if (SRLTCR.scrollWidth > SRLTCR.offsetWidth) {
                if ("scrollBehavior" in document.documentElement.style) {
                    SRLTCR.scrollBy({
                        top: 0,
                        left: bcr.left,
                        behavior: "smooth"
                    });
                } else {
                    SRLTCR.scrollLeft = 80 * parseInt(currentId);
                }
            } else if (SRLTCR.scrollHeight > SRLTCR.offsetHeight) {
                if ("scrollBehavior" in document.documentElement.style) {
                    SRLTCR.scrollBy({
                        top: bcr.top,
                        left: 0,
                        behavior: "smooth"
                    });
                } else {
                    SRLTCR.scrollTop = bcr.top;
                }
            }
        }

        /* If we are dragging the thumbnails, we don't want to accidentally click
    on the image immediately after releasing the mouse, so we need a condition
    to determine if we are "clicking" on the same point on the page (pageX OR pageY)
    and that we are not coming from a drag action */
        handleCurrentElementRef.current = function (pageX, pageY, id) {
            if (
                SRLTCR.scrollWidth > SRLTCR.offsetWidth ||
        SRLTCR.scrollHeight > SRLTCR.offsetHeight
            ) {
                if (
                    Math.trunc(pageX) === Math.trunc(startX.current) ||
          Math.trunc(pageY) === Math.trunc(startY.current)
                ) {
                    handleCurrentElement(id, currentId);
                }
            } else {
                handleCurrentElement(id, currentId);
            }
        };

        function handleMouseDownOnThumbnails(pageX, pageY?) {
            if (SRLTCR.scrollWidth > SRLTCR.offsetWidth) {
                isDown.current = true;
                startX.current = pageX - SRLTCR.offsetLeft;
                scrollLeft.current = SRLTCR.scrollLeft;
                SRLTCR.classList.add("SRLDraggable");
            } else if (SRLTCR.scrollHeight > SRLTCR.offsetHeight) {
                isDown.current = true;
                startY.current = pageY - SRLTCR.offsetTop;
                scrollTop.current = SRLTCR.scrollTop;
                SRLTCR.classList.add("SRLDraggable");
            }
        }

        function handleMouseLeaveOnThumbnails() {
            isDown.current = false;
            SRLTCR.classList.remove("SRLDraggable");
        }

        function handleMouseMoveOnThumbnails(pageX, pageY?) {
            if (!isDown.current) return;
            if (SRLTCR.scrollHeight > SRLTCR.offsetHeight) {
                const y = pageY - SRLTCR.offsetTop;
                const walk = y - startY.current;
                SRLTCR.scrollTop = scrollTop.current - walk;
            } else {
                const x = pageX - SRLTCR.offsetLeft;
                const walk = x - startX.current;
                SRLTCR.scrollLeft = scrollLeft.current - walk;
            }
        }

        // EVENT LISTENERS
        SRLTCR.addEventListener("mousedown", (e) =>
            handleMouseDownOnThumbnails(e.pageX, e.pageY)
        );
        SRLTCR.addEventListener("mouseleave", () => handleMouseLeaveOnThumbnails());
        SRLTCR.addEventListener("mouseup", () => handleMouseLeaveOnThumbnails());
        SRLTCR.addEventListener("mousemove", (e) =>
            handleMouseMoveOnThumbnails(e.pageX, e.pageY)
        );

        // CLEAN UP
        return () => {
            SRLTCR.removeEventListener("mousedown", (e) =>
                handleMouseDownOnThumbnails(e.pageX)
            );
            SRLTCR.removeEventListener("mouseleave", () =>
                handleMouseLeaveOnThumbnails()
            );
            SRLTCR.removeEventListener("mouseup", () =>
                handleMouseLeaveOnThumbnails()
            );
            SRLTCR.removeEventListener("mousemove", (e) =>
                handleMouseMoveOnThumbnails(e)
            );
        };
    }, [currentId, handleCurrentElement, thumbnailsRef, thumbnailsAlignment]);

    return (
        <StyledThumbnailGallery
            ref={thumbnailsRef}
            thumbnailsPosition={thumbnailsPosition}
            thumbnailsSize={thumbnailsSize}
            thumbnailsAlignment={thumbnailsAlignment}
            thumbnailsContainerBackgroundColor={thumbnailsContainerBackgroundColor}
            thumbnailsContainerPadding={thumbnailsContainerPadding}
            className="SRLThumbnailsContainer"
        >
            {elements.map((element) => {
                return (
                    <StyledThumbnailGalleryImage
                        onClick={(e) =>
                            handleCurrentElementRef.current(e.pageX, e.pageY, element.id)
                        }
                        thumbnailsOpacity={thumbnailsOpacity}
                        thumbnailsSize={thumbnailsSize}
                        thumbnailsGap={thumbnailsGap}
                        key={element.id}
                        id={element.id}
                        className={`SRLThumb SRLThumb${element.id} ${
                            currentId === element.id ? "SRLThumbnailSelected" : ""
                        }`}
                        style={{
                            backgroundImage: `url('${element.thumbnail}')`
                        }}
                    >
                        {(element.type === "video" || element.type === "embed_video") && (
                            <VideoIcon thumbnailsIconColor={thumbnailsIconColor} />
                        )}
                    </StyledThumbnailGalleryImage>
                );
            })}
        </StyledThumbnailGallery>
    );
};

export default ThumbnailGalleryComponent;


