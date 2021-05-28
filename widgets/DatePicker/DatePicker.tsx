import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { format, parse } from 'date-fns';
import {
  getDateFormat,
  ISO_DATE_FORMAT,
} from '@airasia-common/libraries/datetime';
import { Keyboard, TouchableOpacity } from 'react-native';
import { Wrapper } from '..';
import { testProp } from '../../utils/UITestingHelper';
import InputTextView from './InputTextView';
import DateTimePickerView from './DateTimePickerView';

const DatePicker = ({
  placeholder,
  boxProps,
  variant,
  touchableWrapperProps,
  label,
  value,
  onChange,
  onFocus,
  inputAccessoryProps,
  dateFormat,
  dateTimePickerProps,
  postIconName,
  defaultSelect,
  touchableWithoutFeedback,
}) => {
  const [date, setDate] = useState(value);
  const [show, setShow] = useState(false);
  const mode = 'date';

  useEffect(() => {
    setDate(value);
  }, [value]);

  useEffect(() => {
    if (show) {
      onFocus();
    }
  }, [show]);

  function onChangeValue(selectedDate) {
    const selectedDateStr = format(selectedDate, dateFormat);
    const currentDate = selectedDateStr || date;
    setShow(false);
    setDate(currentDate);
    onChange(currentDate);
  }

  function parseDateObjectValue() {
    if (date) {
      const dateFnsParse = parse(date, dateFormat, new Date());
      const reFormat = format(dateFnsParse, ISO_DATE_FORMAT);
      return new Date(reFormat);
    } else if (defaultSelect) {
      return defaultSelect;
    } else if (
      dateTimePickerProps &&
      (dateTimePickerProps.maximumDate || dateTimePickerProps.minimumDate)
    ) {
      return dateTimePickerProps.maximumDate || dateTimePickerProps.minimumDate;
    }
    return new Date();
  }

  return (
    <Wrapper>
      <TouchableOpacity
        {...testProp('text_box_view')}
        onPress={() => {
          Keyboard.dismiss();
          setShow(true);
        }}
        accessible={false}
        activeOpacity={1}
        {...touchableWrapperProps}
      >
        <InputTextView
          variant={variant}
          boxProps={boxProps}
          placeholder={placeholder}
          showPicker={show}
          label={label}
          value={date}
          postIconName={postIconName}
        />
      </TouchableOpacity>
      <DateTimePickerView
        {...testProp('datetimepicker_view')}
        showPicker={show}
        defaultValue={parseDateObjectValue()}
        onChangeValue={onChangeValue}
        mode={mode}
        inputAccessoryProps={inputAccessoryProps}
        onCancel={() => setShow(false)}
        dateTimePickerProps={dateTimePickerProps}
      />
    </Wrapper>
  );
};

DatePicker.propTypes = {
  value: PropTypes.string,
  touchableWrapperProps: PropTypes.object,
  inputAccessoryProps: PropTypes.object,
  boxProps: PropTypes.object,
  placeholder: PropTypes.string,
  variant: PropTypes.string,
  label: PropTypes.string,
  renderValue: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  dateFormat: PropTypes.string,
  dateTimePickerProps: PropTypes.object,
  postIconName: PropTypes.string,
  defaultSelect: PropTypes.object,
  touchableWithoutFeedback: PropTypes.bool,
};

DatePicker.defaultProps = {
  onChange: () => {},
  onFocus: () => {},
  value: '',
  dateFormat: getDateFormat(),
  dateTimePickerProps: {},
};
export default DatePicker;
