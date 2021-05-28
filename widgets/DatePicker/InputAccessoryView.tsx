import React from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const InputAccessoryViewBox = styled(Row)({
    height: 45,
    justifyContent: "space-between",
    alignItems: "center",
    paddingX: 4,
    background: ({ theme }) => theme.colors.greyLight,
    border: "1px solid",
    borderColor: "grey",
    zIndex: 2,
});

const ButtonText = styled(Text)({
    background: "transparent",
    color: "tertiaryBlue",
});

const ButtonCancel = styled(ButtonText)({
    fontWeight: 400,
});

const InputAccessoryView = ({
    doneText = "Done",
    cancelText = "Cancel",
    onDonePress,
    onCancelPress,
}) => {
    return (
        <InputAccessoryViewBox>
            {!!cancelText && (
                <TouchableOpacity onPress={onCancelPress} accessible={false}>
                    <Wrapper background="transparent">
                        <ButtonCancel>{cancelText}</ButtonCancel>
                    </Wrapper>
                </TouchableOpacity>
            )}
            {!!doneText && (
                <TouchableOpacity onPress={onDonePress} accessible={false}>
                    <Wrapper background="transparent">
                        <ButtonText>{doneText}</ButtonText>
                    </Wrapper>
                </TouchableOpacity>
            )}
        </InputAccessoryViewBox>
    );
};

InputAccessoryView.propTypes = {
    doneText: PropTypes.string,
    cancelText: PropTypes.string,
    onDonePress: PropTypes.func,
    onCancelPress: PropTypes.func,
};

export default InputAccessoryView;
