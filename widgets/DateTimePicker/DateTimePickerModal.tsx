import { Platform } from "react-native";
import { DateTimePickerModal as DateTimePickerAndroid } from "./DateTimePicker.android";
import { DateTimePickerModal as DateTimePickerIOS } from "./DateTimePicker.ios";

const DateTimePickerModal = Platform.select({
    android: DateTimePickerAndroid as any,
    ios: DateTimePickerIOS,
    default: DateTimePickerAndroid,
});

export default DateTimePickerModal;
