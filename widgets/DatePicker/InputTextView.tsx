import React from "react";
import PropTypes from "prop-types";
import { variant } from "styled-system";
import Styled from "../../utils/Styled";
import { Variant } from "../../utils/constants";
import { Text, Wrapper, Row, CaptionText, InputIcon } from "..";
import { testProp } from "../../utils/UITestingHelper";

const Box = Styled(
    Row,
    {
        width: 1,
        height: 50,
        border: "1px solid",
        borderColor: "greyLight",
        borderRadius: 4,
        paddingX: 16,
        paddingY: 14,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 12,
    },
    variant({
        variants: {
            [Variant.Error]: {
                borderColor: "tertiaryOrange",
            },
        },
    })
);

const truncatedStyle = {
    paddingRight: "20px",
    numberOfLines: 1,
    ellipsizeMode: "tail",
};

const PlaceHolderText = Styled(Text, {
    color: "greyDark",
    opacity: 0.5,
    lineHeight: "20px",
    fontWeight: 400,
    ...truncatedStyle,
});

const ValueText = Styled(Text, {
    color: "darkBlack",
    fontWeight: 400,
    lineHeight: "20px",
    paddingTop: 1,
});

const LabelText = Styled(CaptionText, {
    opacity: 0.5,
    ...truncatedStyle,
});

const InputTextView = ({
    value,
    placeholder,
    variant = Variant.Default,
    boxProps,
    showPicker,
    label,
    postIconName = "date-range",
}) => {
    return (
        <Box
            {...boxProps}
            variant={variant}
            borderColor={showPicker ? "secondary" : "greyLight"}
            paddingY={value ? "6px" : 14}
        >
            <Wrapper width={1}>
                {value ? (
                    <>
                        <LabelText {...testProp("label")}>{label}</LabelText>
                        <ValueText {...testProp("value")}>{value}</ValueText>
                    </>
                ) : (
                    <PlaceHolderText {...testProp("placeholder")}>
                        {placeholder}
                    </PlaceHolderText>
                )}
            </Wrapper>
            <InputIcon name={postIconName} />
        </Box>
    );
};

InputTextView.propTypes = {
    value: PropTypes.string,
    touchableWrapperProps: PropTypes.object,
    boxProps: PropTypes.object,
    showPicker: PropTypes.bool,
    placeholder: PropTypes.string,
    variant: PropTypes.string,
    label: PropTypes.string,
    renderValue: PropTypes.func,
    postIconName: PropTypes.string,
};

export default InputTextView;
