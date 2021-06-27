import * as React from "react";
import { Animated, TouchableOpacity } from "react-native";
import { SvgIcon } from "react-native-simple-elements/components/Icon";
import { Text } from "react-native-simple-elements/components/Typography";

type Props = {
    items: Record<string, any>[],
    onItemPress?: (item) => void,
}

const SimpleBottomNavigation = (props: Props) => {

    const {
        items,
        onItemPress,
    } = props;

    const heightValue = React.useRef(new Animated.Value(0)).current;

    const slideIn = () => {
        Animated.timing(heightValue, {
            toValue: 56,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    const slideOut = () => {
        Animated.timing(heightValue, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    React.useEffect(() => {
        slideIn();

        return () => {
            slideOut();
        };
    }, []);

    return (
        <Animated.View
            style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                left: 0,
                width: "100%",
                height: heightValue,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderTopWidth: 1,
                borderTopColor: "black",
            }}
        >
            {Array.isArray(items) && items.length > 0 &&
                items.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={{
                                width: items.length === 5 ? "20%" : items.length === 4 ? "25%" : "20%",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onPress={() => {
                                if (typeof onItemPress === "function") {
                                    onItemPress(item);
                                }
                            }}
                        >
                            {item.icon &&
                                <SvgIcon
                                    icon={item.icon}
                                />
                            }
                            <Text>{item.label}</Text>
                        </TouchableOpacity>
                    );
                })
            }
        </Animated.View>
    );
};

export default SimpleBottomNavigation;
