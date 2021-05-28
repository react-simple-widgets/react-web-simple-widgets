import * as React from "react";
import { storiesOf } from "@storybook/react";
import { UseIntervalExample } from "./UseIntervalExample";

storiesOf("Hooks", module)
    .add("useInterval", () => {
        return (
            <UseIntervalExample
            />
        )
    })
