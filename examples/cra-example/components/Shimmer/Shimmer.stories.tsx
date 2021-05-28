import * as React from "react";
import { storiesOf } from "@storybook/react";
import ShimmerPlaceHolder, { createShimmerPlaceholder } from "react-native-styled-paper/components/ShimmerPlaceholder";
import LinearGradient from 'react-native-linear-gradient';

// @ts-ignore
const Shimmer = createShimmerPlaceholder(LinearGradient);

storiesOf("Shimmer", module)
    .add("Default", () => {

        return (
            <ShimmerPlaceHolder />
        )
    })
    .add("With LinearGradient", () => {

        return (
            <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
            />
        )
    })
    .add("With Custom", () => {

        return (
            <Shimmer
            />
        )
    })
