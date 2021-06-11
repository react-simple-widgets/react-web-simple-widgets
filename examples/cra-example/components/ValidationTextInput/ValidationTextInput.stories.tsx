import * as React from "react";
import { storiesOf } from "@storybook/react";
import ValidationTextInput from "react-native-styled-simple-widgets/widgets/ValidationTextInput";

const ValidationTextInputExample = (props) => {

    return (
        <ValidationTextInput
            value="value"
            onChangeText={(value) => {
                // do someting
            }}
            errorMessage="Has error"
        />
    )
};

storiesOf("ValidationTextInput", module)
    .add("Default", () => {
        return (
            <ValidationTextInputExample
            />
        )
    })
