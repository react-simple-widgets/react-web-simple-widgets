import * as React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react";
import Appbar from "react-native-styled-paper/components/Appbar";
import Menu from "react-native-styled-paper/components/Menu";
import MenuIcon from "@mdi/svg/svg/menu.svg";
import ArchiveIcon from "@mdi/svg/svg/archive.svg";
import MailIcon from "@mdi/svg/svg/mail.svg";
import LabelIcon from "@mdi/svg/svg/label.svg";
import DeleteIcon from "@mdi/svg/svg/delete.svg";

const AppbarExample = () => {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        <View>
            <Appbar style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
            }}>
                <Appbar.Action
                    icon={ArchiveIcon}
                    onPress={() => console.log('Pressed archive')}
                />
                <Appbar.Action icon={MailIcon} onPress={() => console.log('Pressed mail')} />
                <Appbar.Action icon={LabelIcon} onPress={() => console.log('Pressed label')} />
                <Appbar.Action
                    icon={DeleteIcon}
                    onPress={() => console.log('Pressed delete')}
                />
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <Appbar.Action icon={MenuIcon} color="white" onPress={openMenu} />
                    }>
                    <Menu.Item onPress={() => {console.log('Option 1 was pressed')}} title="Option 1" />
                    <Menu.Item onPress={() => {console.log('Option 2 was pressed')}} title="Option 2" />
                    <Menu.Item onPress={() => {console.log('Option 3 was pressed')}} title="Option 3" disabled />
                </Menu>
            </Appbar>
        </View>
    );
}

storiesOf("Appbar", module)
    .add("Default", () => {
        return (
            <AppbarExample />
        )
    })
