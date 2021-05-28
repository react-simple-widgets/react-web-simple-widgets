import React, { useState, Fragment } from "react";
import { Keyboard, KeyboardAvoidingView } from "react-native";
import TextInput from "react-native-styled-paper/components/TextInput";
import { findItems } from "./helper";
import { Variant } from "../../utils/constants";
import PickerItems from "./PickerItems";

type Props = {
  label: string,
  placeholder: string,
  postIconName: string,
  errorMsg: string,
  onSelect: () => void,
  onBlur: () => void,
  onFocus: () => void,
  value: string,
  onChange: () => void,
  touched: boolean,
  selectTextOnFocus: boolean,
  onlyAllowNumber: boolean,
  hideResults: boolean,
  disabled: boolean,
  keyboardType: string,
  variant: "success" | "error" | "default",
  inputProps: object,
  inputContainerStyle: object,
  containerStyle: object,
  returnRegExp: () => any,
  data: array,
};

const Autocomplete = (props: Props) => {
    const {
        label,
        placeholder,
        postIconName,
        errorMsg,
        onChange = Function.prototype,
        onSelect = Function.prototype,
        onBlur = Function.prototype,
        onFocus = Function.prototype,
        onlyAllowNumber,
        selectTextOnFocus = false,
        keyboardType = "default",
        variant = Variant.Default,
        value,
        disabled,
        inputProps,
        inputContainerStyle,
        containerStyle,
        data = [],
        returnRegExp,
        hideResults,
    } = props;

    const [selectedItems, setSelectedItems] = useState([]);

    const handleTextChange = value => {
        if (!hideResults) {
            const filtered = findItems({
                queryText: value ? value.trim() : "",
                data,
                returnRegExp,
            });
            setSelectedItems(filtered);
        }
        onChange(value);
    };

    const handleBlur = trimmedValue => {
        setSelectedItems([]);
        onBlur(trimmedValue);
    };

    const handleFocus = () => {
        onFocus();
    };

    const handleSelect = (item, index) => {
        setSelectedItems([]);
        Keyboard.dismiss();
        onSelect(item, index);
    };

    const textInputProps = {
        label,
        placeholder,
        postIconName,
        errorMsg,
        onChange: handleTextChange,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onlyAllowNumber,
        selectTextOnFocus,
        keyboardType,
        variant,
        value,
        disabled,
        inputProps,
    };

    const showResults = selectedItems.length > 0;

    return (
        <Fragment>
            <Wrapper {...inputContainerStyle}>
                <TextInput {...textInputProps} />
            </Wrapper>
            {!hideResults && (
                <Wrapper
                    zIndex={1}
                    {...containerStyle}
                    onStartShouldSetResponderCapture={() => false}
                >
                    {Boolean(showResults) && (
                        <KeyboardAvoidingView behavior={"padding"}>
                            <PickerItems items={selectedItems} onSelect={handleSelect} />
                        </KeyboardAvoidingView>
                    )}
                </Wrapper>
            )}
        </Fragment>
    );
};

Autocomplete.displayName = "Autocomplete";

export default Autocomplete;
