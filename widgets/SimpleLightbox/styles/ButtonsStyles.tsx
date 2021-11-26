import styled, { css } from "styled-components";

type StyledButtonProps = {
    buttonsSize?: string,
    buttonsBackgroundColor?: string,
    buttonsIconPadding?: string,
    buttonsIconColor?: string,
};

// The buttons
const StyledButton = styled.button<StyledButtonProps>`
  position: absolute;
  height: ${(props) => (props.buttonsSize ? props.buttonsSize : "30px")};
  width: ${(props) => (props.buttonsSize ? props.buttonsSize : "30px")};
  transition: color 0.3s ease;
  background-color: ${(props) =>
        props.buttonsBackgroundColor
            ? props.buttonsBackgroundColor
            : "rgba(30, 30, 36, 0.8)"};
  border: 0;
  border-radius: 0;
  box-shadow: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  visibility: inherit;
  z-index: 9998;
  opacity: 1;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  .SRLIdle & {
    opacity: 0;
    @media (max-width: 768px) {
      opacity: 1;
    }
    @media (max-width: 360px) {
      opacity: 1;
    }
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    height: ${(props) =>
        props.buttonsSize
            ? Math.round(parseInt(props.buttonsSize, 10) / 1.2) + "px"
            : "30px"};
    width: ${(props) =>
        props.buttonsSize
            ? Math.round(parseInt(props.buttonsSize, 10) / 1.2) + "px"
            : "30px"};
    .SRLIdle & {
      opacity: 1;
    }
  }
  div {
    height: ${(props) => (props.buttonsSize ? props.buttonsSize : "30px")};
    width: ${(props) => (props.buttonsSize ? props.buttonsSize : "30px")};
    padding: ${(props) =>
        props.buttonsIconPadding ? props.buttonsIconPadding : "5px"};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
      padding: 10px;
      height: ${(props) =>
        props.buttonsSize
            ? Math.round(parseInt(props.buttonsSize, 10) / 1) + "px"
            : "30px"};
      width: ${(props) =>
        props.buttonsSize
            ? Math.round(parseInt(props.buttonsSize, 10) / 1) + "px"
            : "30px"};
    }
    @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) {
      padding: 10px;
      height: ${(props) =>
        props.buttonsSize
            ? Math.round(parseInt(props.buttonsSize, 10) / 1) + "px"
            : "30px"};
      width: ${(props) =>
        props.buttonsSize
            ? Math.round(parseInt(props.buttonsSize, 10) / 1) + "px"
            : "30px"};
    }
    @media (max-width: 768px) {
      padding: 10px;
      height: ${(props) =>
        props.buttonsSize
            ? Math.round(parseInt(props.buttonsSize, 10) / 1.1) + "px"
            : "30px"};
      width: ${(props) =>
        props.buttonsSize
            ? Math.round(parseInt(props.buttonsSize, 10) / 1.1) + "px"
            : "30px"};
      .SRLIdle & {
        opacity: 1;
      }
    }
    svg {
      display: block;
      height: 100%;
      width: 100%;
      overflow: visible;
      position: relative;
      path {
        transition: fill 0.3s ease;
        fill: ${(props) =>
        props.buttonsIconColor
            ? props.buttonsIconColor
            : "rgba(255, 255, 255, 0.8)"};
      }
    }
    &:hover {
      svg path {
        fill: ${(props) =>
        props.buttonsIconColor &&
        // REGEX TO THE RESCUE (converts the RGBA value to have the full opacity to have the nice "hover" effect)
        // eslint-disable-next-line no-useless-escape
        props.buttonsIconColor.replace(/[\d\.]+\)$/g, "1)")};
      }
    }
  }
`;

type ThumbnailsDivSizesProps = {
    width?: number,
    height?: number,
}
type StyledTopButtonsProps = {
    showProgressBar?: boolean,
    autoplay?: boolean,
    buttonsOffsetFromProgressBar?: string,
    thumbnailsPosition?: string,
    thumbnailsDivSizes?: ThumbnailsDivSizesProps,
    thumbnailsSize?: ThumbnailsDivSizesProps,
    hideThumbnails?: boolean,
}
// Top right buttons
const StyledTopButtons = styled.div<StyledTopButtonsProps>`
  position: absolute;
  top: 5px;
  right: 5px;
  top: calc(env(safe-area-inset-top) + 5px);
  right: calc(env(safe-area-inset-right) + 5px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  transition: 0.3s ease;
  will-change: right;
  /* Offset the buttons if the progress bar is active and the autoplay is "playing" */
  ${(props) =>
        props.showProgressBar &&
        props.autoplay &&
        css`
      top: ${Math.round(parseInt(props.buttonsOffsetFromProgressBar, 10)) *
            2}px;
      top: calc(
        env(safe-area-inset-top) +
          ${Math.round(parseInt(props.buttonsOffsetFromProgressBar, 10)) * 2}px
      );
    `};
  /* Offset the buttons if the thumbnails are on the right */
  ${(props) =>
        props.thumbnailsPosition === "right" &&
        css`
      right: ${props.thumbnailsDivSizes.width + 5}px;
      right: calc(
        env(safe-area-inset-top) + ${props.thumbnailsDivSizes.width + 5}px
      );
    `};
  /* Thumbnails on right are closed so we need to reset the position */
  ${(props) =>
        props.hideThumbnails &&
        props.thumbnailsPosition === "right" &&
        css`
      right: 5px;
      right: calc(env(safe-area-inset-right) + 5px);
    `};
  @media (max-width: 768px) {
    right: 5px;
    right: calc(env(safe-area-inset-right) + 5px) !important;
  }
`;

// The "close" button
const StyledCloseIcon = styled(StyledButton)`
  position: relative;
`;

// The "expand" button
const StyledExpandIcon = styled(StyledButton)`
  position: relative;
  margin-right: 5px;
  @media (max-width: 768px) {
    display: none;
  }
`;

// The "zoomOut" button
const StyledZoomOutIcon = styled(StyledButton)`
  position: relative;
  margin-right: 5px;
`;

type StyledAutoplayIconProps = {
    autoplaySpeed?: number,
}
// The "autoplay" button
const StyledAutoplayIcon = styled(StyledButton)<StyledAutoplayIconProps>`
  position: relative;
  margin-right: 5px;
  display: ${(props) => (props.autoplaySpeed === 0 ? "none" : "flex")};
`;

type StyledThumbnailsIconProps = {
    thumbnailsPosition?: string,
}
// The "download" button
const StyledThumbnailsIcon = styled(StyledButton)<StyledThumbnailsIconProps>`
  position: relative;
  margin-right: 5px;
  ${(props) =>
        props.thumbnailsPosition === "right" &&
        css`
      svg {
        transform: rotate(-90deg);
      }
    `}
  ${(props) =>
        props.thumbnailsPosition === "left" &&
        css`
      svg {
        transform: rotate(90deg);
      }
    `}
  @media (max-width: 768px) {
    svg {
      transform: rotate(0) !important;
    }
  }
`;

// The "download" button
const StyledDownloadIcon = styled(StyledButton)`
  position: relative;
  margin-right: 5px;
`;

type StyledNextIconProps = {
    thumbnailsPosition?: string,
    hideThumbnails?: boolean,
    thumbnailsDivSizes :ThumbnailsDivSizesProps,
    thumbnailsSize :ThumbnailsDivSizesProps,
}

// The "next" button
const StyledNextIcon = styled(StyledButton)<StyledNextIconProps>`
  top: calc(50% - 50px);
  right: 5px;
  right: calc(env(safe-area-inset-right) + 5px);
  transition: 0.3s ease;
  will-change: right;
  /* Offset the thumbnails with the width of the div of the thumbnails */
  ${(props) =>
        props.thumbnailsPosition === "right" &&
        css`
      right: ${props.thumbnailsDivSizes.width + 5}px;
      right: calc(
        env(safe-area-inset-right) + ${props.thumbnailsDivSizes.width + 5}px
      );
    `};
  /* Thumbnails on right are closed so we need to reset the position */
  ${(props) =>
        props.hideThumbnails &&
        props.thumbnailsPosition === "right" &&
        css`
      right: 5px;
      right: calc(env(safe-area-inset-right) + 5px);
    `};
  @media (max-width: 768px) {
    display: none;
  }
`;

type StyledPrevIconProps = {
    thumbnailsPosition?: string,
    hideThumbnails?: boolean,
    thumbnailsDivSizes :ThumbnailsDivSizesProps,
    thumbnailsSize :ThumbnailsDivSizesProps,
}
// The "prev" button
const StyledPrevIcon = styled(StyledButton)<StyledPrevIconProps>`
  top: calc(50% - 50px);
  left: 5px;
  left: calc(env(safe-area-inset-left) + 5px);
  transition: 0.3s ease;
  will-change: left;
  /* Offset the thumbnails with the width of the div of the thumbnails */
  ${(props) =>
        props.thumbnailsPosition === "left" &&
        css`
      left: ${props.thumbnailsDivSizes.width + 5}px;
      left: calc(
        env(safe-area-inset-right) + ${props.thumbnailsDivSizes.width + 5}px
      );
    `};
  /* Thumbnails on left are closed so we need to reset the position */
  ${(props) =>
        props.hideThumbnails &&
        props.thumbnailsPosition === "left" &&
        css`
      left: 5px;
      left: calc(env(safe-area-inset-right) + 5px);
    `};
  @media (max-width: 768px) {
    display: none;
  }
`;

// Export all of the above
export {
    StyledCloseIcon as StyledCloseIcon,
    StyledNextIcon as StyledNextIcon,
    StyledPrevIcon as StyledPrevIcon,
    StyledAutoplayIcon as StyledAutoplayIcon,
    StyledThumbnailsIcon as StyledThumbnailsIcon,
    StyledDownloadIcon as StyledDownloadIcon,
    StyledExpandIcon as StyledExpandIcon,
    StyledZoomOutIcon as StyledZoomOutIcon,
    StyledTopButtons as StyledTopButtons
};
