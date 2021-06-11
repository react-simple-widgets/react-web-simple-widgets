import * as React from "react";
import TextInput from "react-native-styled-paper/components/TextInput";
import HelperText from "react-native-styled-paper/components/HelperText";

type Props = {
    value: string;
    onChangeText: (text) => void;
    errorMessage?: string;
    secureTextEntry?: boolean;
};

const ValidationTextInput = (props: Props) => {
    const { value, onChangeText, errorMessage, secureTextEntry } = props;

    return (
        <>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
            <HelperText type="error" visible={!!errorMessage}>
                {errorMessage}
            </HelperText>
        </>
    );
};

ValidationTextInput.defaultProps = {
    secureTextEntry: false,
};

export default ValidationTextInput;
