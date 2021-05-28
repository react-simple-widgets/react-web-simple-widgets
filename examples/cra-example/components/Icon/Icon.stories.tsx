import * as React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, number, boolean } from "@storybook/addon-knobs";
import { SvgIcon } from "react-native-styled-paper/components/Icon";
import AccountIcon from "@mdi/svg/svg/account.svg";
import CheckOutlineIcon from "@mdi/svg/svg/check-outline.svg";

storiesOf("Icon", module)
    .addDecorator(withKnobs)
    .add("Svg Icon", () => {
        const color = text("color", "#ffff00");
        const size = number("size", 24);
        const outline = boolean("outline", false);

        return (
            <View>
                <SvgIcon
                    icon={AccountIcon}
                    color={color}
                    size={size}
                    outline={outline}
                />
                <SvgIcon
                    icon={CheckOutlineIcon}
                    color={color}
                    size={size}
                    outline={outline}
                />
            </View>
        )
    })
