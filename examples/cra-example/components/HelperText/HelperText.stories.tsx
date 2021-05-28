import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from "@storybook/react";
import TextInput from 'react-native-styled-paper/components/TextInput';
import HelperText from 'react-native-styled-paper/components/HelperText';

const HelperTextExample = () => {
    const [text, setText] = React.useState('');

    const onChangeText = text => setText(text);

    const hasErrors = () => {
        return !text.includes('@');
    };

    return (
        <View>
            <TextInput label="Email" value={text} onChangeText={onChangeText} />
            <HelperText type="error" visible={hasErrors()}>
                Email address is invalid!
      </HelperText>
        </View>
    );
};

storiesOf("HelperText", module)
    .add("Default", () => {
        return (
            <HelperTextExample
            />
        )
    })
