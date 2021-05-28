import React from 'react';
import FieldValidator from '../FieldValidator/FieldValidator';
import DatePicker from './DatePicker';

const DatePickerValidator = props => {
  return <FieldValidator {...props} fieldComponent={DatePicker} />;
};

export default DatePickerValidator;
