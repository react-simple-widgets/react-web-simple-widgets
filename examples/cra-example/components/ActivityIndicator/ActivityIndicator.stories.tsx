import * as React from 'react';
import { storiesOf } from '@storybook/react';
import * as Colors from 'react-native-styled-paper/components/theme/colors';
import ActivityIndicator from 'react-native-styled-paper/components/ActivityIndicator';

storiesOf('ActivityIndicator', module).add('Default', () => (
    <ActivityIndicator
        animating={true} color={Colors.red800}
    />
));
