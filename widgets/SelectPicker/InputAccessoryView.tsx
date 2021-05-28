import React from "react";
import { TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import { Text, Wrapper, Row } from "..";
import { testProp } from "../../utils/UITestingHelper";
import styled from "styled-components/native";

const Chevron = styled(View)({
    width: 15,
    height: 15,
    background: "transparent",
    borderColor: "#2F73D2",
    borderTopWidth: 1.5,
    borderRightWidth: 1.5,
});

const ChevronUp = styled(Chevron, {
    transform: [{ translateY: 4 }, { rotate: "-45deg" }],
});

const ChevronDown = styled(Chevron, {
    marginLeft: 22,
    transform: [{ translateY: -5 }, { rotate: "135deg" }],
});

const InputAccessoryViewBox = styled(Row, {
    height: 45,
    justifyContent: "space-between",
    alignItems: "center",
    paddingX: 4,
    background: theme.colors.greyLight,
    border: "1px solid",
    borderColor: "grey",
    zIndex: 2,
});

const DoneText = styled(Text, {
    background: "transparent",
    color: "tertiaryBlue",
});

const InputAccessoryView = ({
    doneText,
    onDonePress,
    onArrowUp,
    onArrowDown,
}) => {
    return (
        <InputAccessoryViewBox>
            <Row background="transparent">
                <TouchableOpacity
                    onPress={onArrowUp}
                    accessible={false}
                    {...testProp("chevron_up")}
                >
                    <ChevronUp />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onArrowDown}
                    accessible={false}
                    {...testProp("chevron_down")}
                >
                    <ChevronDown />
                </TouchableOpacity>
            </Row>
            {!!doneText && (
                <TouchableOpacity
                    onPress={onDonePress}
                    accessible={false}
                    {...testProp("done_btn")}
                >
                    <Wrapper background="transparent">
                        <DoneText>{doneText}</DoneText>
                    </Wrapper>
                </TouchableOpacity>
            )}
        </InputAccessoryViewBox>
    );
};

InputAccessoryView.propTypes = {
    doneText: PropTypes.string,
    onDonePress: PropTypes.func,
    onArrowUp: PropTypes.func,
    onArrowDown: PropTypes.func,
};

export default InputAccessoryView;
