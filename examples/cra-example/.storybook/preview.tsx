import React from 'react';
import { addDecorator } from '@storybook/react';
import PaperProviver from 'react-native-styled-paper/components/theme/Provider';
import LightTheme from 'react-native-styled-paper/components/theme/LightTheme';
import ToastProvider from 'react-native-styled-paper/components/Toast';
import { Viewport } from 'react-native-styled-paper/components/Container';

const StoryBookUI = ({ children }) => (
    <PaperProviver theme={LightTheme}>
        <ToastProvider>
            <Viewport testID="viewport" style={{ height: "100vh" }}>
                {children}
            </Viewport>
        </ToastProvider>
    </PaperProviver>
);

addDecorator(storyFn => <StoryBookUI>{storyFn()}</StoryBookUI>);
