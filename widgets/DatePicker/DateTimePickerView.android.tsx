import React from "react";
import PropTypes from "prop-types";
import DateTimePicker from "@react-native-community/datetimepicker";
import { testProp } from "../../utils/UITestingHelper";

const DateTimePickerView = ({
    onChangeValue,
    onCancel,
    showPicker,
    defaultValue,
    mode,
    dateTimePickerProps,
}) => {
    function onChange(event, selectedValue) {
        if (event && event.type === "dismissed") {
            onCancel();
        } else if (selectedValue) {
            onChangeValue(selectedValue);
        }
    }

    if (!showPicker) {
        return <></>;
    }

    return (
        <DateTimePicker
            {...testProp("datetimepicker")}
            value={defaultValue || new Date()}
            mode={mode}
            display="spinner"
            onChange={onChange}
            {...dateTimePickerProps}
        />
    );
};

DateTimePickerView.propTypes = {
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
