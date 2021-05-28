import React from "react";
import { array, func, object } from "prop-types";
import styled from "styled-components/native";
import { FlatList, Platform, TouchableWithoutFeedback } from "react-native";
import { Text } from "react-native-styled-paper/components/Typography";

const ITEM_HEIGHT = 50;
const MAX_ITEMS = 3;
const MAX_HEIGHT = MAX_ITEMS * ITEM_HEIGHT;

const PikcerItemsContainer = styled(Wrapper)({
  left: 0,
  right: 0,
});

PikcerItemsContainer.defaultProps = {
    border: "1px solid",
    borderColor: "greyLight",
    borderRadius: 4,
    ...(Platform.OS === "ios"
        ? { position: "absolute", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.08)" }
        : { elevation: 2 }),
    width: 1,
    height: MAX_HEIGHT,
};

PikcerItemsContainer.displayName = "PikcerItemsContainer";

const Option = styled(Row)({
    paddding: 0,
    paddingX: 16,
    paddingTop: 12,
    paddingBottom: 12,
});

Option.displayName = "Option";

const PickerItems = ({
    items,
    onSelect = Function.prototype,
    containerStyle,
}) => {
    const handleOptionClick = (item, index) => {
        onSelect(item, index);
    };

    const itemHeight =
    items.length >= MAX_ITEMS ? MAX_HEIGHT : items.length * ITEM_HEIGHT + 12;

    return (
        <PikcerItemsContainer {...containerStyle} height={itemHeight}>
            <FlatList
                nestedScrollEnabled={true}
                keyboardShouldPersistTaps="always"
                data={items}
                keyExtractor={item => item.value.toString()}
                initialNumToRender={MAX_ITEMS}
                showsVerticalScrollIndicator={true}
                renderItem={({ item: propItem, index }) => {
                    const { itemsSplitted = [] } = propItem;
                    return (
                        <TouchableWithoutFeedback
                            key={index}
                            onPress={() => handleOptionClick(propItem, index)}
                        >
                            <Option paddingTop={index === 0 ? 24 : 12}>
                                {itemsSplitted.map(({ text, hightlight }, index) => (
                                    <Text
                                        key={index}
                                        lineHeight="20px"
                                        fontWeight={400}
                                        background={
                                            hightlight ? "rgba(75, 79, 166, 0.2)" : "transparent"
                                        }
                                    >
                                        {text}
                                    </Text>
                                ))}
                            </Option>
                        </TouchableWithoutFeedback>
                    );
                }}
            />
        </PikcerItemsContainer>
    );
};

PickerItems.propTypes = {
    items: array,
    containerStyle: object,
    onSelect: func,
};

PickerItems.displayName = "PickerItems";

export default PickerItems;
