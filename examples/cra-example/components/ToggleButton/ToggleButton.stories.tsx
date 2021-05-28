import * as React from "react";
import { storiesOf } from "@storybook/react";
import { View } from "react-native";
import ToggleButton from "react-native-styled-paper/components/ToggleButton";
import FormatAlignLeftIcon from "@mdi/svg/svg/format-align-left.svg";
import FormatAlignRightIcon from "@mdi/svg/svg/format-align-right.svg";

const ToggleButtonGroupExample = () => {

    const [ value, setValue ] = React.useState("left");

    return (
        <View>
            <ToggleButton.Group
                value={value}
                onValueChange={value => setValue(value)}
            >
                <ToggleButton icon={FormatAlignLeftIcon} value="left" />
                <ToggleButton icon={FormatAlignRightIcon} value="right" />
            </ToggleButton.Group>
        </View>
    )
}

const ToggleButtonRowExample = () => {

    const [ value, setValue ] = React.useState("left");

    return (
        <View>
            <ToggleButton.Row
                value={value}
                onValueChange={value => setValue(value)}
            >
                <ToggleButton icon={FormatAlignLeftIcon} value="left" />
                <ToggleButton icon={FormatAlignRightIcon} value="right" />
            </ToggleButton.Row>
        </View>
    )
}

storiesOf("ToggleButton", module)
    .add("ToggleButton.Group", () => {
        return (
            <ToggleButtonGroupExample />
        )
    })
    .add("ToggleButton.Row", () => {
        return (
            <ToggleButtonRowExample />
        )
    })
