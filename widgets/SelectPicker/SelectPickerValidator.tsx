import React from 'react';
import FieldValidator from '../FieldValidator/FieldValidator';
import PickerSelect from './SelectPicker';

const PickerSelectValidator = props => {
  return <FieldValidator {...props} fieldComponent={PickerSelect} />;
};

export default PickerSelectValidator;
