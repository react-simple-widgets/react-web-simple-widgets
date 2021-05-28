import { Platform } from "react-native";
import DatePicker from "./DatePicker";
import DatePickerValidator from "./DatePickerValidator";
import DateTimePickerViewAndroid from "./DateTimePickerView.android";
import DateTimePickerViewIOS from "./DateTimePickerView.ios";

const DateTimePickerView = Platform.select({
    "android": DateTimePickerViewAndroid,
    "ios": DateTimePickerViewIOS,
})

export { 
    DatePicker, 
    DatePickerValidator,
    DateTimePickerView,
};
