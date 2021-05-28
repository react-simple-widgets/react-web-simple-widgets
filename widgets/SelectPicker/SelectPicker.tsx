import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Keyboard } from "react-native";
import { Wrapper } from "..";
import { testProp, toSnakeCase } from "../../utils/UITestingHelper";
import InputTextBox from "./InputTextView";
import PickerItemsView from "./PickerItemsView";
import PickerItemsModal from "./SelectPickerItemsModal";

const PickerSelect = ({
    items: propItems = [],
    value,
    onChange,
    onFocus,
    placeholder,
    inputAccessoryProps,
    boxProps,
    variant,
    touchableWrapperProps,
    renderLabel,
    renderValue,
    renderItemValue,
    showModalMobile,
    modalMobileProps,
}) => {
    const items = showModalMobile
        ? [...propItems]
        : [
            {
                label: placeholder,
                value: null,
            },
            ...propItems,
        ];
    const defaultValue = showModalMobile ? {} : items[0];
    const [showPicker, setShowPicker] = useState(false);
    const [selectedItem, setSelectedItem] = useState(defaultValue);

    useEffect(() => {
        if (value) {
            setSelectedItem(items.find(item => value === item.value));
        } else if (selectedItem && selectedItem.value) {
            setSelectedItem(defaultValue);
        }
    }, [items, selectedItem, value, defaultValue]);

    useEffect(() => {
        if (showPicker) {
            onFocus();
        }
    }, [showPicker]);

    const togglePicker = () => {
        Keyboard.dismiss();
        setShowPicker(!showPicker);
    };

    const onValueChange = (value, index) => {
        const item = items[index];
        setSelectedItem(item);
        item && onChange(item.value, item);
    };

    const onSelectItem = (value, index) => {
        togglePicker();
        onValueChange(value, index);
    };

    return (
        <Wrapper {...testProp(toSnakeCase(placeholder))}>
            <TouchableOpacity
                onPress={togglePicker}
                accessible={false}
                activeOpacity={1}
                {...touchableWrapperProps}
                {...testProp("text_box_view")}
            >
                <InputTextBox
                    selectedItem={selectedItem}
                    variant={variant}
                    boxProps={boxProps}
                    placeholder={placeholder}
                    showPicker={showPicker}
                    renderLabel={renderLabel}
                    renderValue={renderValue}
                    renderItemValue={renderItemValue}
                />
            </TouchableOpacity>
            {showModalMobile ? (
                <PickerItemsModal
                    testID="pickeritems_view"
                    placeholder={placeholder}
                    items={items}
                    onValueChange={onSelectItem}
                    selectedItem={selectedItem}
                    showPicker={showPicker}
                    onClose={togglePicker}
                    {...modalMobileProps}
                />
            ) : (
                <PickerItemsView
                    testID="pickeritems_view"
                    placeholder={placeholder}
                    items={items}
                    inputAccessoryProps={inputAccessoryProps}
                    onValueChange={onValueChange}
                    selectedItem={selectedItem}
                    onDonePress={togglePicker}
                    showPicker={showPicker}
                />
            )}
        </Wrapper>
    );
};

PickerSelect.propTypes = {
    items: PropTypes.array,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    touchableWrapperProps: PropTypes.object,
    inputAccessoryProps: PropTypes.object,
    boxProps: PropTypes.object,
    placeholder: PropTypes.string,
    variant: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    renderLabel: PropTypes.func,
    renderValue: PropTypes.func,
    renderItemValue: PropTypes.func,
    showModalMobile: PropTypes.bool,
    modalMobileProps: PropTypes.object,
};

PickerSelect.defaultProps = {
    onChange: () => {},
    onFocus: () => {},
};
export default PickerSelect;
