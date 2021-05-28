import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { Wrapper, Image } from "..";
import { ChangeCurrency } from "../../utils/statics";
import { testProp } from "../../utils/UITestingHelper";
import PickerItemsView from "./PickerItemsView";

const IconPickerSelect = ({
    items = [],
    value,
    inputAccessoryProps,
    onDone,
    placeholder,
}) => {
    const [showPicker, setShowPicker] = useState(false);
    const [selectedItem, setSelectedItem] = useState(items[0]);

    useEffect(() => {
        if (value) {
            setSelectedItem(items.find(item => value === item.value));
        }
    }, [items, value]);

    const togglePicker = () => {
        setShowPicker(!showPicker);
    };

    const onValueChange = (value, index) => {
        const item = items[index];
        setSelectedItem(item);
    };

    const selectedValue = items.find(item => item.value === value);

    return (
        <Wrapper {...testProp("currency_picker")}>
            <TouchableOpacity onPress={togglePicker} accessible={false}>
                <Image source={ChangeCurrency} width={24} height={24} />
            </TouchableOpacity>
            <PickerItemsView
                selectedValue={selectedValue}
                items={items}
                inputAccessoryProps={inputAccessoryProps}
                onValueChange={onValueChange}
                selectedItem={selectedItem || {}}
                onDonePress={({ value: selected }) => {
                    togglePicker();
                    selected
                        ? onDone(selected.value)
                        : selectedItem && onDone(selectedItem.value);
                }}
                placeholder={placeholder}
                havePlaceHolder={true}
                showPicker={showPicker}
            />
        </Wrapper>
    );
};

IconPickerSelect.propTypes = {
    items: PropTypes.array,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    touchableWrapperProps: PropTypes.object,
    inputAccessoryProps: PropTypes.object,
    boxProps: PropTypes.object,
    placeholder: PropTypes.string,
    variant: PropTypes.string,
    onDone: PropTypes.func,
};

IconPickerSelect.defaultProps = {
    onDone: () => {},
};
export default IconPickerSelect;
