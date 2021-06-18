import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import MenuIcon from "@mdi/svg/svg/menu.svg";
import SimpleHeader from "react-web-simple-widgets/widgets/SimpleHeader";
import ScrollviewViewport from "react-native-simple-elements/components/Container/ScrollviewViewport";
import { View, Text } from "react-native";

const onBackButtonPress = action("onBackButtonClick");

const items = [
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

const SimpleHeaderExample = (props) => {
    const title = text("title", "Title");

    return (
        <>
            <SimpleHeader
                backButtonIcon={MenuIcon}
                onBackButtonClick={onBackButtonPress}
                title={title}
                loggedInUser={{
                    firstName: "Username",
                    avatarUrl: "https://via.placeholder.com/350",
                }}
            />
            <ScrollviewViewport>
                {(Array.isArray(items) && items.length > 0) &&
                    items.map((item, index) => {
                        return (
                            <View 
                                key={index}
                                style={{
                                    height: 200,
                                }}
                            >
                                <Text>{`Item ${index}`}</Text>
                            </View>
                        )
                    })
                }
            </ScrollviewViewport>
        </>
    )
}

storiesOf("SimpleHeader", module)
    .addDecorator(withKnobs)
    .add("Default", () => {
        return(
            <SimpleHeaderExample
            />
        )
    })