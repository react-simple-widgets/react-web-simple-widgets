import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Modal, StyleSheet } from 'react-native';
import theme from '@airasia-common/libraries/theming/theme';
import Styled from '../../utils/Styled';
import { Wrapper } from '..';
import { testProp } from '../../utils/UITestingHelper';
import InputAccessoryView from './InputAccessoryView';
import PickerItems from './SelectPickerItems';

const ModalViewBottom = Styled(Wrapper, {
  justifyContent: 'center',
  background: theme.colors.grey,
});

const styles = StyleSheet.create({
  modalViewTop: {
    flex: 1,
  },
});

const ModalViewTop = props => (
  <TouchableOpacity
    style={styles.modalViewTop}
    {...props}
    accessible={false}
    {...testProp('done_btn')}
  />
);

const PickerItemsView = ({
  items = [],
  onValueChange,
  inputAccessoryProps,
  showPicker,
  onDonePress,
  selectedItem,
}) => {
  const getIndexFromItem = () =>
    items.indexOf(items.find(item => item.value === selectedItem.value));

  const onArrowDown = () => {
    const index = getIndexFromItem() + 1;
    if (index < items.length) {
      onValueChange(items[index], index);
    }
  };

  const onArrowUp = () => {
    const index = getIndexFromItem() - 1;
    if (index >= 0) {
      onValueChange(items[index], index);
    }
  };

  return (
    <Modal
      visible={showPicker}
      transparent
      animationType="slide"
      {...testProp('modal')}
    >
      <ModalViewTop onPress={onDonePress} />
      <InputAccessoryView
        {...inputAccessoryProps}
        onDonePress={onDonePress}
        onArrowUp={onArrowUp}
        onArrowDown={onArrowDown}
      />
      <ModalViewBottom>
        <PickerItems
          items={items}
          onValueChange={onValueChange}
          selectedValue={selectedItem.value}
          {...testProp('picker')}
        />
      </ModalViewBottom>
    </Modal>
  );
};

PickerItemsView.propTypes = {
  items: PropTypes.array,
  inputAccessoryProps: PropTypes.object,
  selectedItem: PropTypes.object,
  showPicker: PropTypes.bool,
  onValueChange: PropTypes.func,
  onDonePress: PropTypes.func,
};

export default PickerItemsView;
