import * as React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "react-native-styled-paper/components/Checkbox";

storiesOf("Checkbox", module)
    .add("Default", () => {

        return (
            <Checkbox
                status='checked'
            />
        )
    })
