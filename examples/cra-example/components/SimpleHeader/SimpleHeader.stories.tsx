import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, withKnobs } from "@storybook/addon-knobs";
import SimpleHeader from "react-native-styled-simple-widgets/widgets/SimpleHeader";
import MenuIcon from "@mdi/svg/svg/menu.svg";

const SimpleHeaderExample = (props) => {
    const title = text("title", "Title");

    return (
        <>
            <SimpleHeader
                backButtonIcon={MenuIcon}
                title={title}
            />
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