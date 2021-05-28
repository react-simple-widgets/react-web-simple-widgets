import * as React from "react";
import { ScrollView } from "react-native";
import { action } from "@storybook/addon-actions";
import Card from "react-native-styled-paper/components/Card";

const testData = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
];

const handleScroll = action("onScroll");

export function OnScrollExample(props) {

    return (
        <ScrollView
            scrollEnabled={true}
            scrollEventThrottle={16}
            onScroll={handleScroll}
            // onScroll={(evt) => {
            //     console.log(evt);
            // }}
            testID="scrollview_1"
        >
            {(Array.isArray(testData) && testData.length > 0) &&
                testData.map((item, index) => {
                    return (
                        <Card
                            key={index}
                        >
                            {index}
                        </Card>
                    )
                })
            }
        </ScrollView>
    )
}
