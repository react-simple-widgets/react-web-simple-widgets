import React from "react";
import PropTypes, { shape } from "prop-types";
import {
    StyleSheet,
    Modal,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import theme from "@airasia-common/libraries/theming/theme";
import { Wrapper } from "../Wrapper";
import Styled from "../../utils/Styled";
import { H3, SubBodyText, Row } from "..";
import { testProp } from "../../utils/UITestingHelper";
import OptionItem, { ITEM_HEIGHT } from "./OptionItem";

const { height: windowHeight } = Dimensions.get("window");
const styles = StyleSheet.create({
    flatList: {
        backgroundColor: "white",
        height: windowHeight - 194,
    },
    doneTouch: {
        backgroundColor: "white",
    },
});

const Header = Styled(H3, {
    lineHeight: "24px",
    background: "white",
});

const DoneText = Styled(SubBodyText, {
    background: "transparent",
    color: "secondary",
    fontWeight: 500,
});

const BottomBox = Styled(Row, {
    height: 51,
    justifyContent: "space-between",
    alignItems: "center",
    paddingX: 4,
    border: "1px solid",
    borderColor: "grey",
    background: "white",
    opacity: 1,
});

const PickerItemsView = ({
    items = [],
    showPicker,
    placeholder,
    onValueChange,
    inputAccessoryProps = {},
    onDonePress,
    selectedItem = {},
}) => {
    let currentSelectedRef;
    let currentSelectedItem = {};
    const handleRadioChange = (selected, index, setSelectedRef) => {
        currentSelectedItem = { value: selected, selectedIndex: index + 1 };
        if (setSelectedRef !== currentSelectedRef) {
            currentSelectedRef && currentSelectedRef(false);
            currentSelectedRef = setSelectedRef;
        }
    };

    const handleDone = () => {
        onDonePress({
            value: currentSelectedItem.value,
            index: currentSelectedItem.selectedIndex,
        });
        if (currentSelectedItem.value) {
            onValueChange(
                currentSelectedItem.value,
                currentSelectedItem.selectedIndex
            );
        }
    };

    let initIndex = 0;
    if (selectedItem) {
        initIndex = items.findIndex(({ value }) => value === selectedItem.value);
    }

    const getItemLayout = (data, index) => {
        return {
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
        };
    };

    return (
        <Modal
            transparent={true}
            visible={showPicker}
            animationType="slide"
            {...testProp("modal")}
        >
            <SafeAreaView {...testProp("picker")}>
                <Wrapper opacity={0.9} background={theme.colors.darkBlack} zIndex={1}>
                    <Wrapper marginX={16} marginY={26} background="white">
                        <Header
                            padding={24}
                            background="white"
                            {...testProp("placeholder")}
                        >
                            {inputAccessoryProps.headerText}
                            {placeholder}
                        </Header>
                        <FlatList
                            getItemLayout={getItemLayout}
                            initialScrollIndex={initIndex - 1}
                            data={placeholder ? items.slice(1, items.length) : items}
                            style={styles.flatList}
                            keyExtractor={item => item.value}
                            initialNumToRender={15}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) => (
                                <OptionItem
                                    item={item}
                                    index={index}
                                    isSelected={Boolean(
                                        item.value &&
                      selectedItem.value &&
                      selectedItem.value === item.value
                                    )}
                                    onValueChange={handleRadioChange}
                                />
                            )}
                        />
                        <BottomBox>
                            <Wrapper />
                            <TouchableOpacity
                                onPress={handleDone}
                                accessible={false}
                                style={styles.doneTouch}
                                {...testProp("done_btn")}
                            >
                                <Wrapper background="transparent">
                                    <DoneText>
                                        {inputAccessoryProps.doneText.toUpperCase()}
                                    </DoneText>
                                </Wrapper>
                            </TouchableOpacity>
                        </BottomBox>
                    </Wrapper>
                </Wrapper>
            </SafeAreaView>
        </Modal>
    );
};

PickerItemsView.propTypes = {
    onValueChange: PropTypes.func,
    items: PropTypes.array,
    selectedItem: PropTypes.object,
    inputAccessoryProps: shape({
        doneText: PropTypes.string.isRequired,
        headerText: PropTypes.string,
    }),
    showPicker: PropTypes.bool,
    onDonePress: PropTypes.func,
    placeholder: PropTypes.string,
    havePlaceHolder: PropTypes.bool,
};

export default PickerItemsView;
