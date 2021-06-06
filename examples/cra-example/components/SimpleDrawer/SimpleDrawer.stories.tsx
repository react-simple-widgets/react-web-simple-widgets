import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SimpleDrawer from "react-native-styled-simple-widgets/widgets/SimpleDrawer";
import { DrawerContext } from "react-native-styled-paper/components/Drawer";
import Button from "react-native-styled-paper/components/Button";

const onItemPress = action("onItemPress");

const items = [
    {},
    {},
    {},
    {},
    {},
];

const SimpleDrawerExample = (props) => {
    const { drawerIsOpen, setDrawerIsOpen } = React.useContext(DrawerContext);

    return (
        <>
            <Button
                onPress={() => setDrawerIsOpen(!drawerIsOpen)}
            >
                Toggle Drawer
            </Button>
            <SimpleDrawer
                items={items}
                onItemPress={onItemPress}
                drawerPaddingTop="0"
            />
        </>
    )
}

storiesOf("SimpleDrawer", module)
    .add("Default", () => {
        return(
            <SimpleDrawerExample
            />
        )
    })