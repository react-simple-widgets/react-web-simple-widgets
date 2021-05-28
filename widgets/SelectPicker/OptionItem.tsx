import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { RadioButton } from "../Radio";
import { testProp, toSnakeCase } from "../../utils/UITestingHelper";

export const ITEM_HEIGHT = 52;

const OptionItem = ({
    item = {},
    index,
    onValueChange,
    isSelected = false,
}) => {
    const [selected, setSelected] = React.useState(false);

    const handleRadioChange = useCallback(
        selectedItem => {
            setSelected(true);
            onValueChange(selectedItem, index, setSelected);
        },
        [index, onValueChange]
    );

    useEffect(() => {
        if (isSelected) {
            handleRadioChange(item);
        }
    }, [handleRadioChange, isSelected, item]);

    return (
        <RadioButton
            isVertical={true}
            id={item.value}
            text={item.label}
            isSelected={selected}
            onChange={() => handleRadioChange(item)}
            containerProps={{
                paddingY: 14,
                marginX: 16,
                background: "white",
                height: ITEM_HEIGHT,
            }}
            textProps={{
                fontSize: 16,
                lineHeight: 24,
                background: "white",
            }}
            {...testProp(`radio_${toSnakeCase(item.label)}`)}
        />
    );
};

OptionItem.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number,
    onValueChange: PropTypes.func,
    isSelected: PropTypes.bool,
};

export default OptionItem;
