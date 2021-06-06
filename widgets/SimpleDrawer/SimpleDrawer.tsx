import * as React from "react";
import Drawer from "react-native-styled-paper/components/Drawer";

type Props = {
    items: Record<string, any>[],
    onItemPress?: (item) => void,
    drawerPaddingTop?: number | string,
};

const SimpleDrawer = (props: Props) => {

    const {
        items,
        onItemPress,
        drawerPaddingTop,
    } = props;

    const _handleItemPress = (item) => {
        if (typeof onItemPress === "function") {
            onItemPress(item);
        }
    };

    return (
        <Drawer
            drawerPaddingTop={drawerPaddingTop}
        >
            {(Array.isArray(items) && items.length > 0) &&
                items.map((item, index) => {
                    return (
                        <Drawer.Item 
                            key={index}
                            label={`Item ${index}`}
                            onPress={() => _handleItemPress(item)}
                        />
                    );
                })
            }
        </Drawer>
    );
};

export default SimpleDrawer;
