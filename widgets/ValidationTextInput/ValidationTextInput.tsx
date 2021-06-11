import * as React from "react";
import TextInput from "react-native-styled-paper/components/TextInput";
import HelperText from "react-native-styled-paper/components/HelperText";

type Props = {
    value: string;
    onChange: (text) => void;
    errorMessage?: string;
    secureTextEntry?: boolean;
};

const ValidationTextInput = (props: Props) => {
    const { value, onChange, errorMessage, secureTextEntry } = props;

    return (
        <>
            <TextInput
                value={value}
                onChangeText={onChange}
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
