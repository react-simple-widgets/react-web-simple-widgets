import React from 'react';
import { addDecorator } from '@storybook/react';
import PaperProviver from 'react-native-simple-elements/components/theme/Provider';
import LightTheme from 'react-native-simple-elements/components/theme/LightTheme';
import ToastProvider from 'react-native-simple-elements/components/Toast';
import { Viewport } from 'react-native-simple-elements/components/Container';

const StoryBookUI = ({ children }) => (
    <PaperProviver theme={LightTheme}>
        <ToastProvider>
            <Viewport testID="viewport" style={{ height: "100vh", overflow: "hidden" }}>
                {children}
            </Viewport>
        </ToastProvider>
    </PaperProviver>
);

addDecorator(storyFn => <StoryBookUI>{storyFn()}</StoryBookUI>);
