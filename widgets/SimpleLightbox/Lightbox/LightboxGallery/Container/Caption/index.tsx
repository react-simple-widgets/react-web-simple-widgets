import * as React from "react";
import { StyledCaption } from "../../../../styles/CaptionStyles";

type CaptionOptions = {
    showCaption?: boolean,
    captionColor?: string,
    captionFontFamily?: string,
    captionFontSize?: string,
    captionFontStyle?: string,
    captionFontWeight?: number | string,
    captionTextTransform?: string
}

type Props = {
    id?: string,
    captionOptions?: CaptionOptions,
    captionRef?: React.RefObject<any>,
    thumbnailsPosition?: string,
    caption?: string,
    captionStyle?: any,
}

const CaptionContainerComponent = ({
    captionOptions,
    caption,
    thumbnailsPosition,
    captionRef
}: Props) => {
    return (
        <StyledCaption
            captionStyle={captionOptions as any}
            thumbnailsPosition={thumbnailsPosition}
            className="SRLCaptionContainer"
            ref={captionRef}
        >
            <p className="SRLCaptionText">{caption}</p>
        </StyledCaption>
    );
};



export default CaptionContainerComponent;
