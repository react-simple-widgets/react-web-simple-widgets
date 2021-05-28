import * as React from "react";
import { TouchableOpacity, Modal, StyleSheet, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { testProp } from "../../utils/UITestingHelper";
import InputAccessoryView from "./InputAccessoryView";
import styled from "styled-components/native";

const ModalViewBottom = styled(View)({
    justifyContent: "center",
    background: ({ theme }) => theme.colors.grey,
});

const styles = StyleSheet.create({
    modalViewTop: {
        flex: 1,
    },
});

const ModalViewTop = props => (
    <TouchableOpacity style={styles.modalViewTop} {...props} accessible={false} />
);

type Props = {
    inputAccessoryProps?: Record<string, any>,
    showPicker?: boolean,
    onChangeValue?: (value) => void,
    onCancel?: () => void,
    defaultValue?: Record<string, any>,
    mode?: string,
    dateTimePickerProps?: Record<string, any>,
};

const DateTimePickerView = (props: Props) => {
    const {
        onChangeValue,
        onCancel,
        inputAccessoryProps,
        showPicker,
        defaultValue,
        mode,
        dateTimePickerProps,
    } = props;
    const [value, setValue] = React.useState(defaultValue);

    React.useEffect(() => {
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

DateTimePickerView.defaultProps = {
    dateTimePickerProps: {},
};

export default DateTimePickerView;
