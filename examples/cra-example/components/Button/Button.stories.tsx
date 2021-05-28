import * as React from 'react';
import { View } from "react-native";
import { storiesOf } from '@storybook/react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from 'react-native-styled-paper/components/Button';

const onPressFn = action("onPress");

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('Default', () => {
        const title = text("title", "Text");

        return (
            <>
                <View>
                    <Button
                        onPress={onPressFn}
                    >
                        {title}
                    </Button>
                </View>
                <View>
                    <Button
                        mode="text"
                        onPress={onPressFn}
                    >
                        {title}
                    </Button>
                </View>
                <View>
                    <Button
                        mode="outlined"
                        onPress={onPressFn}
                    >
                        {title}
                    </Button>
                </View>
                <View>
                    <Button
                        mode="contained"
                        onPress={onPressFn}
                    >
                        {title}
                    </Button>
                </View>
            </>
        )
    })
    .add('Primary', () => {
        const title = text("title", "Text");
        const mode = select('mode', ['text', 'outlined', 'contained'], "text");
        const dark = boolean('dark', false);

        return (
        <Button
            dark={dark}
            mode={mode}
            onPress={onPressFn}
        >
            {title}
        </Button>
        )
    })
