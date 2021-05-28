import * as React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react";
import RadioButton from 'react-native-styled-paper/components/RadioButton';

const RadioButtonExample = () => {
    const [checked, setChecked] = React.useState('first');

    return (
        <View>
            <RadioButton
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
            />
            <RadioButton
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
            />
        </View>
    );
};

storiesOf("RadioButton", module)
    .add("Default", () => <RadioButtonExample />)
