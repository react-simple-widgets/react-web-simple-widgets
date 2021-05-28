import * as React from 'react';
import { storiesOf } from "@storybook/react";
import Chip from "react-native-styled-paper/components/Chip";

storiesOf("Chip", module)
    .add("Default", () => {

        return (
            <Chip
            >
                Avatar
            </Chip>
        )
    })
