import * as React from "react";
import { View, Button } from "react-native";
import { storiesOf } from "@storybook/react";
import DateTimePicker from "react-native-styled-simple-widgets/widgets/DateTimePicker";

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
                isVisible={isDatePickerVisible}
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
