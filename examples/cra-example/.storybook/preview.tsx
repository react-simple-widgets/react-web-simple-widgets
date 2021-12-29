import * as React from 'react';
import { addDecorator } from '@storybook/react';
import PaperProviver from 'react-native-simple-elements/components/theme/Provider';
import LightTheme from 'react-native-simple-elements/components/theme/LightTheme';
import ToastProvider from 'react-native-simple-elements/components/Toast';
import { createGlobalStyle } from 'styled-components';
// import { Viewport } from 'react-native-simple-elements/components/Container';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

const StoryBookUI = ({ children }) => (
    <>
        <GlobalStyle />
        <PaperProviver theme={LightTheme}>
            <ToastProvider>
                {/* <Viewport testID="viewport" style={{ minHeight: "100vh", overflow: "auto" }}> */}
                {children}
                {/* </Viewport> */}
            </ToastProvider>
        </PaperProviver>
    </>
);

addDecorator(storyFn => <StoryBookUI>{storyFn()}</StoryBookUI>);
