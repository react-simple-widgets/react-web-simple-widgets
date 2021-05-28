import { storiesOf } from "@storybook/react";
import * as React from 'react';
import Switch from 'react-native-styled-paper/components/Switch';

const SwitchExample = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

storiesOf("Switch", module)
    .add("Default", () => {
        return (
            <SwitchExample />
        )
    })
