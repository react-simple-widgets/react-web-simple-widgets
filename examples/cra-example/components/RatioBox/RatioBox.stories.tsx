import * as React from "react";
import { storiesOf } from "@storybook/react";
import RatioBox from "react-native-styled-simple-widgets/widgets/RatioBox";
import { Text } from "react-native-styled-paper/components/Typography";
import { View } from "react-native";

storiesOf("RatioBox", module)
    .add("Default", () => {
        return (
            <RatioBox>
                <View
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "green",
                    }}
                >
                    <Text>Hello</Text>
                </View>
            </RatioBox>
        )
    })