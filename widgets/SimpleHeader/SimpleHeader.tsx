import * as React from "react";
import styled from "styled-components";
import Appbar from "react-native-styled-paper/components/Appbar";
import AuthorizedUserMenu from "../AuthorizedUserMenu";

const HeaderContainer = styled.div({
    zIndex: 3,
});

type Props = {
    title?: string,
    backButtonIcon?: React.ReactElement,
    onBackButtonClick?: () => void,
    loggedInUser?: Record<string, any>;
    children?: React.ReactNode;
};

export default function SimpleHeader(props: Props) {
    const { 
        title, 
        backButtonIcon, 
        onBackButtonClick,
        children, 
        loggedInUser, 
    } = props;

    const _handleBackActionPress = () => {
        if (typeof onBackButtonClick === "function") {
            onBackButtonClick();
        }
    };

    return (
        <HeaderContainer>
            <Appbar.Header>
                <Appbar.BackAction 
                    icon={backButtonIcon}
                    onPress={_handleBackActionPress} 
                />
                <Appbar.Content title={title}/>
                {children}
                <AuthorizedUserMenu loggedInUser={loggedInUser} />
            </Appbar.Header>
        </HeaderContainer>
    );
}
