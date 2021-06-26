import * as React from "react";
import { View, Button } from "react-native";
import { storiesOf } from "@storybook/react";
import DateTimePicker from "react-web-simple-widgets/widgets/DateTimePicker/DateTimePicker";
import DateTimePickerPopup from "react-web-simple-widgets/widgets/DateTimePicker/mweb2/Popup";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const viewportParams = {
    viewports: {
        ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
};

const DateTimePickerExample = () => {

    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    return (
        <View>
            <Button title="Show Date Picker" onPress={showDatePicker} />
            <DateTimePicker
                visible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    )
}

const DateTimePickerPopupExample = () => {

    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    return (
        <View>
            <Button title="Show Date Picker" onPress={showDatePicker} />
            <DateTimePickerPopup
                visible={isDatePickerVisible}
                datePicker={
                    <DateTimePicker
                        // rootNativeProps={{'data-xx': 'yy'}}
                        // minDate={minDate}
                        // maxDate={maxDate}
                        // defaultDate={now}
                        // mode={props.mode}
                        // locale={props.locale}
                    />
                }
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    )
}

storiesOf("DateTimePicker", module)
    .add("Default", () => {

        return (
            <DateTimePickerExample />
        );
    })
    .add("DateTimePickerPopup", () => {

        return (
            <DateTimePickerPopupExample />
        );
    })
    .add("DateTimePickerPopup2", () => {

        return (
            <DateTimePickerPopupExample />
        );
    }, {
        viewport: {
            ...viewportParams,
            defaultViewport: "iphonex",
        },
    })