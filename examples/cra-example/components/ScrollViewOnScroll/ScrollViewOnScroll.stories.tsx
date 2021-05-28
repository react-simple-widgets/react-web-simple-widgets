import * as React from "react";
import { storiesOf } from "@storybook/react";
import { OnScrollExample } from "./OnScrollExample";
import { withKnobs } from "@storybook/addon-knobs";

storiesOf("ScrollView OnScroll", module)
    .addDecorator(withKnobs)
    .add("onScroll", () => {
        return (
            <OnScrollExample
            />
        )
    })
