import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Wrapper } from 'react-native-styled-paper/components/Wrapper';
import { Row } from 'react-native-styled-paper/components/Container';
import { Text } from 'react-native-styled-paper/components/Typography';
import { customStyled } from '../../utils/StyledUtils';

const InputAccessoryViewBox = customStyled(Row, {
    height: 45,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingX: 4,
    background: props => props.theme.colors.greyLight,
    border: '1px solid',
    borderColor: 'grey',
    zIndex: 2,
});

const ButtonText = customStyled(Text, {
    background: 'transparent',
    color: 'tertiaryBlue',
});

const ButtonCancel = customStyled(ButtonText, {
    fontWeight: 400,
});

type Props = {
    doneText?: string,
    cancelText?: string,
    onDonePress?: (evt?) => void,
    onCancelPress?: (evt?) => void,
};

const InputAccessoryView = ({
    doneText,
    cancelText,
    onDonePress,
    onCancelPress,
}: Props) => {
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

InputAccessoryView.defaultProps = {
    doneText: "Done",
    cancelText: "Cancel",
}

export default InputAccessoryView;
