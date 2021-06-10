import * as React from "react";
import { storiesOf } from "@storybook/react";
import CarouselBanner from "react-native-styled-simple-widgets/widgets/CarouselBanner";
import RatioBox from "react-native-styled-simple-widgets/widgets/RatioBox";
import { Text } from "react-native-styled-paper/components/Typography";
import { useWindowDimensions, View } from "react-native";

const CarouselBannerExample = () => {

    const { width: viewportWidth } = useWindowDimensions();

    return (
        <CarouselBanner
            sliderWidth={viewportWidth}
            data={[{}, {}, {}]}
            renderItem={({ item, index }) => {
                return (
                    <RatioBox key={index}>
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
            }}
        />
    ) 
}

storiesOf("CarouselBanner", module)
    .add("Default", () => {
        return (
            <CarouselBannerExample
            />
        )
    })