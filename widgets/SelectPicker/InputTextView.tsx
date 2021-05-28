import React from "react";
import PropTypes from "prop-types";
import { variant } from "styled-system";
import { Variant } from "../../utils/constants";
import { testProp } from "../../utils/UITestingHelper";
import styled from "styled-components/native";

const Box = styled(
    Row)(
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
    },
    variant({
        variants: {
            [Variant.Error]: {
                borderColor: "tertiaryOrange",
            },
        },
    })
);

const IconBox = styled(Wrapper, {
    position: "absolute",
    display: "flex",
    right: 21,
    alignItems: "center",
});

const truncatedStyle = {
    paddingRight: "20px",
    numberOfLines: 1,
    ellipsizeMode: "tail",
};

const PlaceHolderText = styled(Text, {
    color: "greyDark",
    opacity: 0.5,
    lineHeight: "20px",
    fontWeight: 400,
    ...truncatedStyle,
});

const ValueText = styled(Text, {
    color: "darkBlack",
    fontWeight: 400,
    lineHeight: "20px",
    paddingTop: 1,
});

const LabelText = styled(CaptionText, {
    opacity: 0.5,
    ...truncatedStyle,
});

const Icon = () => (
    <IconBox>
        <Ionicons name="ios-chevron-down" color={theme.colors.greyDark} size={20} />
    </IconBox>
);

const InputTextView = ({
    selectedItem: propSelectedItem = {},
    placeholder,
    variant = Variant.Default,
    boxProps,
    showPicker,
    renderLabel,
    renderValue,
    renderItemValue,
}) => {
    const selectedItem = propSelectedItem || {};

    return (
        <Box
            {...boxProps}
            variant={variant}
            borderColor={showPicker ? "secondary" : "greyLight"}
            paddingY={selectedItem.value ? "6px" : 14}
        >
            {selectedItem.value ? (
                <Wrapper width={1}>
                    <LabelText {...testProp("label")}>
                        {renderLabel ? renderLabel(selectedItem) : placeholder}
                    </LabelText>
                    {renderItemValue ? (
                        renderItemValue(selectedItem)
                    ) : (
                        <ValueText {...testProp("value")}>
                            {renderValue ? renderValue(selectedItem) : selectedItem.label}
                        </ValueText>
                    )}
                </Wrapper>
            ) : (
                <Wrapper width={1}>
                    <PlaceHolderText {...testProp("placeholder")}>
                        {placeholder}
                    </PlaceHolderText>
                </Wrapper>
            )}
            <Icon />
        </Box>
    );
};

InputTextView.propTypes = {
    selectedItem: PropTypes.object,
    touchableWrapperProps: PropTypes.object,
    boxProps: PropTypes.object,
    showPicker: PropTypes.bool,
    placeholder: PropTypes.string,
    variant: PropTypes.string,
    renderLabel: PropTypes.func,
    renderValue: PropTypes.func,
    renderItemValue: PropTypes.func,
};

export default InputTextView;
