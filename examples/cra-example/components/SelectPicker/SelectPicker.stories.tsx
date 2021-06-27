import * as React from "react";
import { View, Text } from "react-native";
import { storiesOf } from "@storybook/react";
import SelectPicker, { SelectPickerMWebPopup } from "react-web-simple-widgets/widgets/SelectPicker";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const viewportParams = {
    viewports: {
        ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
};

const items = [
    { label: "Item 0" },
    { label: "Item 0" },
    { label: "Item 0" },
    { label: "Item 0" },
    { label: "Item 0" },
    { label: "Item 0" },
    { label: "Item 0" },
    { label: "Item 0" },
];

const DateTimePickerExample = () => {

    const [isDatePickerVisible, setDatePickerVisibility] = React.useState("");

    const handleConfirm = (date) => {
        setDatePickerVisibility(date);
    };

    return (
        <SelectPicker
            selectedValue={isDatePickerVisible}
            onValueChange={handleConfirm}
            data-testid="selectpicker"
        >
            {(Array.isArray(items) && items.length > 0) &&
                items.map((item, index) => {
                    return (
                        <Text key={index}>{item.label}</Text>
                    )
                })
            }
        </SelectPicker>
    )
}

storiesOf("SelectPicker", module)
    .add("Default", () => {

        return (
            <DateTimePickerExample />
        );
    })
    .add("Mobile View", () => {

        const [isDatePickerVisible, setDatePickerVisibility] = React.useState("");

        const handleConfirm = (date) => {
            setDatePickerVisibility(date);
        };

        return (
            <SelectPickerMWebPopup
                visible={true}
                picker={
                    <SelectPicker
                        selectedValue={isDatePickerVisible}
                        onValueChange={handleConfirm}
                        data-testid="selectpicker"
                    >
                        {(Array.isArray(items) && items.length > 0) &&
                            items.map((item, index) => {
                                return (
                                    <Text key={index}>{item.label}</Text>
                                )
                            })
                        }
                    </SelectPicker>
                }
            />
        )
    }, {
        viewport: {
            ...viewportParams,
            defaultViewport: "iphonex",
        },
    })
    .add("Playground", () => {

        return (
            <DateTimePickerExample />
        );
    });
