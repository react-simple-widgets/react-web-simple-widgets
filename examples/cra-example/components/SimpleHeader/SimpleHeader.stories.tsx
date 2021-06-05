import * as React from "react";
import { storiesOf } from "@storybook/react";
import SimpleHeader from "react-native-styled-simple-widgets/widgets/SimpleHeader";
import MenuIcon from "@mdi/svg/svg/menu.svg";

const SimpleHeaderExample = (props) => {
    return (
        <>
            <SimpleHeader
                backButtonIcon={MenuIcon}
            />
        </>
    )
}

storiesOf("SimpleHeader", module)
    .add("Default", () => {
        return(
            <SimpleHeaderExample
            />
        )
    })