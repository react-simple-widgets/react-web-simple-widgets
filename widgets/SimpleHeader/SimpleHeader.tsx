import * as React from "react";
import styled from "styled-components";
import useScrollbarSize from "react-scrollbar-size";
import Appbar from "react-native-simple-elements/components/Appbar";
import AuthorizedUserMenu from "../AuthorizedUserMenu";

const HeaderContainer = styled.div({
    zIndex: 3,
});

type Props = {
    title?: string,
    backButtonIcon?: React.ReactElement,
    onBackButtonClick?: () => void,
    loggedInUser?: Record<string, any>;
    isUserIconCircle?: boolean,
    children?: React.ReactNode;
};

const defaultProps = {
    isUserIconCircle: true,
};

const SimpleHeader = (props: Props) => {

    const { 
        title, 
        backButtonIcon, 
        onBackButtonClick,
        children, 
        loggedInUser,
        isUserIconCircle,
    } = props;

    const { width: scrollbarSize } = useScrollbarSize();

    const _handleBackActionPress = () => {
        if (typeof onBackButtonClick === "function") {
            onBackButtonClick();
        }
    };

    return (
        <HeaderContainer
            style={{
                marginRight: scrollbarSize || 0,
            }}
        >
            <Appbar.Header>
                <Appbar.BackAction 
                    icon={backButtonIcon}
                    onPress={_handleBackActionPress} 
                />
                <Appbar.Content 
                    title={title}
                />
                {children}
                <AuthorizedUserMenu 
                    circle={isUserIconCircle}
                    loggedInUser={loggedInUser} 
                />
            </Appbar.Header>
        </HeaderContainer>
    );
};

SimpleHeader.defaultProps = defaultProps;

export default SimpleHeader;