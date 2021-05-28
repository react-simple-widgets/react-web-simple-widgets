import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import theme from '@airasia-common/libraries/theming/theme';
import { translate } from '@airasia-common/libraries/i18n/LocaleProvider';
import Styled from '../../utils/Styled';
import { Text, Wrapper, Row } from '..';

const InputAccessoryViewBox = Styled(Row, {
  height: 45,
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingX: 4,
  background: theme.colors.greyLight,
  border: '1px solid',
  borderColor: 'grey',
  zIndex: 2,
});

const ButtonText = Styled(Text, {
  background: 'transparent',
  color: 'tertiaryBlue',
});

const ButtonCancel = Styled(ButtonText, {
  fontWeight: 400,
});

const InputAccessoryView = ({
  doneText = translate('dateTimePicker.done'),
  cancelText = translate('dateTimePicker.cancel'),
  onDonePress,
  onCancelPress,
}) => {
  return (
    <InputAccessoryViewBox>
      {!!cancelText && (
        <TouchableOpacity onPress={onCancelPress} accessible={false}>
          <Wrapper background="transparent">
            <ButtonCancel>{cancelText}</ButtonCancel>
          </Wrapper>
        </TouchableOpacity>
      )}
      {!!doneText && (
        <TouchableOpacity onPress={onDonePress} accessible={false}>
          <Wrapper background="transparent">
            <ButtonText>{doneText}</ButtonText>
          </Wrapper>
        </TouchableOpacity>
      )}
    </InputAccessoryViewBox>
  );
};

InputAccessoryView.propTypes = {
  doneText: PropTypes.string,
  cancelText: PropTypes.string,
  onDonePress: PropTypes.func,
  onCancelPress: PropTypes.func,
};

export default InputAccessoryView;
