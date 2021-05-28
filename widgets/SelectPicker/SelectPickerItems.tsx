import React from 'react';
import PropTypes from 'prop-types';
import { Picker } from 'react-native';
import { testProp } from '../../utils/UITestingHelper';

const PickerItems = ({ items, ...restProps }) => (
  <Picker {...restProps}>
    {items.map((item, index) => (
      <Picker.Item {...item} key={index} {...testProp(`item_${item.label}`)} />
    ))}
  </Picker>
);

PickerItems.propTypes = {
  items: PropTypes.array,
};

export default PickerItems;
