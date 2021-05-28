import * as React from 'react';
import { Text } from "react-native";
import { storiesOf } from '@storybook/react';
import Surface from 'react-native-styled-paper/components/Surface';

storiesOf('Surface', module).add('Default', () => (
    <Surface
    >
        <Text>Text</Text>
    </Surface>
));
