import * as React from "react";
import { View } from "react-native";
import Menu from "react-native-simple-elements/components/Menu";
import ImageButton from "react-native-simple-elements/components/ImageButton";
import Text from "react-native-simple-elements/components/Text";

type Props = {
    circle?: boolean,
    loggedInUser?: Record<string, any>,
}

const defaultProps = {
    circle: false,
};

const AuthorizedUserMenu = (props: Props) => {

    const {
        loggedInUser,
        circle,
    } = props;
    const {
        firstName,
        avatarUrl,
    } = loggedInUser || {} as any;

    const [ isOpen, setIsOpen ] = React.useState(false);

    const openMenu = () => {
        setIsOpen(true);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <Menu
            visible={isOpen}
            onDismiss={closeMenu}
            anchor={
                <ImageButton
                    source={{ uri: avatarUrl }}
                    circle={circle}
                    onPress={openMenu}
                />
            }
        >
            <View>
                <Text>{firstName || ""}</Text>
            </View>
            <Menu.Item title="Item 1" />
            <Menu.Item title="Item 2" />
            {loggedInUser?.accessToken && <Menu.Item title="Item 3" />}
        </Menu>
    );
};

AuthorizedUserMenu.defaultProps = defaultProps;

export default AuthorizedUserMenu;
