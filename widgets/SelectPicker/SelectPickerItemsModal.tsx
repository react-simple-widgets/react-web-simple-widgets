import React from "react";
import PropTypes from "prop-types";
import {
    Modal,
    KeyboardAvoidingView,
    FlatList,
    TouchableOpacity,
    Platform,
    View,
    StyleSheet,
} from "react-native";
import styled from "styled-components";

const styles = StyleSheet.create({
    divider: {
        borderTopWidth: 1,
        borderTopColor: "#D9DBE0",
        backgroundColor: ({ theme }) => theme.colors.primaryWhite,
    },
    modalViewTop: {
        flex: 1,
        backgroundColor: ({ theme }) => theme.colors.darkBlack,
        opacity: 0.8,
    },
    selection: {
        minHeight: 250,
        maxHeight: 300,
    },
    sectionList: {
        paddingTop: 14,
        backgroundColor: ({ theme }) => theme.colors.primaryWhite,
    },
    itemText: {
        height: 48,
        fontSize: 16,
        lineHeight: 20,
    },
    highlightItem: {
        fontWeight: "500",
        color: ({ theme }) => theme.colors.secondary,
    },
    itemRightText: {
        height: 48,
        fontSize: 16,
        lineHeight: 20,
        color: ({ theme }) => theme.colors.greyDark,
    },
    keyboardAvoidingView: {
        backgroundColor: ({ theme }) => theme.colors.greyDark,
    },
    title: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        height: 56,
        paddingLeft: 16,
        paddingRight: 16,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        backgroundColor: ({ theme }) => theme.colors.primaryWhite,
    },
});

const CloseIcon = styled(MaterialIcons)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.greyDark};
  margin-left: 23px;
`;

const Item = styled(Wrapper)({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingX: 16,
});

const getIndexFromItem = (selectedItem, items = []) =>
    items.indexOf(items.find(item => item.value === selectedItem.value));

const renderItem = (onSelect, selectedValue, selectedIndex) => item => {
    const { value, label, rightLabel } = item;
    const isSelected = selectedValue === value;
    const handleSelect = () => {
        onSelect(item, selectedIndex);
    };

    return (
        <TouchableOpacity onPress={handleSelect}>
            <Item>
                <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={[styles.itemText, isSelected && styles.highlightItem]}
                >
                    {label}
                </Text>
                {Boolean(rightLabel) && (
                    <Text style={styles.itemRightText}>{rightLabel}</Text>
                )}
            </Item>
        </TouchableOpacity>
    );
};

const PickerItemsModal = ({
    items = [],
    onValueChange,
    onClose,
    selectedItem,
    showPicker,
    title,
}) => {
    const handleRenderItem = ({ item }) => {
        return renderItem(
            onValueChange,
            selectedItem ? selectedItem.value : null,
            getIndexFromItem(item, items)
        )({ value: item.value, label: item.label, rightLabel: item.rightLabel });
    };
    return (
        <Modal
            animationType="slide"
            visible={showPicker}
            transparent
            onRequestClose={onClose}
        >
            <TouchableOpacity
                style={styles.modalViewTop}
                onPress={onClose}
                accessible={false}
            />
            <KeyboardAvoidingView
                behavior={Platform.OS === IOS ? "padding" : "default"}
                style={styles.keyboardAvoidingView}
            >
                <View style={styles.selection}>
                    <View style={styles.title}>
                        <BodyText>{title}</BodyText>
                        <CloseIcon onPress={onClose} size={24} name="close" />
                    </View>
                    <View style={styles.divider} />
                    <FlatList
                        style={styles.sectionList}
                        data={items ? items : []}
                        renderItem={handleRenderItem}
                        keyExtractor={(item, index) => `${item}_${index}`}
                    />
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
};

PickerItemsModal.propTypes = {
    items: PropTypes.array,
    onValueChange: PropTypes.func,
    onClose: PropTypes.func,
    selectedItem: PropTypes.object,
    title: PropTypes.string,
    showPicker: PropTypes.bool,
};

export default PickerItemsModal;