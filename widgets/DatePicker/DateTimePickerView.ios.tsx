import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Modal, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import theme from "@airasia-common/libraries/theming/theme";
import Styled from "../../utils/Styled";
import { Wrapper } from "..";
import { testProp } from "../../utils/UITestingHelper";
import InputAccessoryView from "./InputAccessoryView";

const ModalViewBottom = Styled(Wrapper, {
    justifyContent: "center",
    background: theme.colors.grey,
});

const styles = StyleSheet.create({
    modalViewTop: {
        flex: 1,
    },
});

const ModalViewTop = props => (
    <TouchableOpacity style={styles.modalViewTop} {...props} accessible={false} />
);

const DateTimePickerView = ({
    onChangeValue,
    onCancel,
    inputAccessoryProps,
    showPicker,
    defaultValue,
    mode,
    dateTimePickerProps,
}) => {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    function onChange(event, selectedValue) {
        const currentDate = selectedValue || value;
        setValue(currentDate);
    }

    function onDonePress() {
        onChangeValue(value);
    }

    function onCancelPress() {
        setValue(defaultValue);
        onCancel();
    }

    return (
        <Modal visible={showPicker} transparent animationType="slide">
            <ModalViewTop onPress={onCancelPress} />
            <InputAccessoryView
                {...inputAccessoryProps}
                onDonePress={onDonePress}
                onCancelPress={onCancelPress}
            />
            <ModalViewBottom>
                <DateTimePicker
                    {...testProp("datetimepicker")}
                    value={value || new Date()}
                    mode={mode}
                    display="spinner"
                    onChange={onChange}
                    {...dateTimePickerProps}
                    locale={"en_GB"}
                    textColor="black"
                />
            </ModalViewBottom>
        </Modal>
    );
};

DateTimePickerView.propTypes = {
    inputAccessoryProps: PropTypes.object,
    showPicker: PropTypes.bool,
    onChangeValue: PropTypes.func,
    onCancel: PropTypes.func,
    defaultValue: PropTypes.object,
    mode: PropTypes.string,
    dateTimePickerProps: PropTypes.object,
};

DateTimePickerView.defaultProps = {
    dateTimePickerProps: {},
};

export default DateTimePickerView;
