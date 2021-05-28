import React from 'react';
import { fireEvent } from 'react-native-testing-library';
import { render } from '../../utils/TestUtils';
import PickerSelect from './SelectPicker';

const selectItems = [
  {
    label: 'Java',
    value: 'java',
  },
  {
    label: 'JavaScript',
    value: 'js',
  },
];

describe('PickerSelect', () => {
  describe('Rendering - no data', () => {
    const component = render(
      <PickerSelect
        placeholder="Nationality / Region"
        inputAccessoryProps={{ doneText: 'Done' }}
      />
    );

    it.skip('should render had data state match to snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('Rendering - has data', () => {
    const component = render(
      <PickerSelect
        placeholder="Nationality / Region"
        items={selectItems}
        inputAccessoryProps={{ doneText: 'Done' }}
      />
    );

    it.skip('should render had data state match to snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('Click DonePress and Value change button', () => {
      const modalPicker = component.getByTestId('modal');
      expect(modalPicker.props.visible).toBeFalsy();

      const inputTextBox = component.getByTestId('text_box_view');
      fireEvent(inputTextBox, 'press');
      expect(modalPicker.props.visible).toBeTruthy();

      const picker = component.getByTestId('picker');
      fireEvent(picker, 'valueChange', selectItems[1].value, 2);
      expect(picker.props.selectedValue).toBeNull();

      fireEvent(picker, 'valueChange', null, 0);
      expect(picker.props.selectedValue).toBeNull();
    });
  });
});
