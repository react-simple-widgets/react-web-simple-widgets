import React from "react";
import { FlatList, Platform, StyleProp, StyleSheet, Text, TextInput, View } from "react-native";

type Props = StyleProp<TextInput> & {
    /**
   * These styles will be applied to the container which
   * surrounds the autocomplete component.
   */
    containerStyle?: StyleProp<View>,
    /**
   * Assign an array of data objects which should be
   * rendered in respect to the entered text.
   */
    data: string[] | Record<string, any>[],
    /**
   * Props which can be applied to result `FlatList`.
   */
    flatListProps?: StyleProp<FlatList>,
    /**
   * Set to `true` to hide the suggestion list.
   */
    hideResults?: boolean,
    /**
   * These styles will be applied to the container which surrounds
   * the textInput component.
   */
    inputContainerStyle?: StyleProp<View>,
    /**
   * Set `keyboardShouldPersistTaps` to true if RN version is <= 0.39.
   */
    keyboardShouldPersistTaps?: "always" | "handeld" | "never" | boolean,
    /**
   * These style will be applied to the result list.
   */
    listContainerStyle?: StyleProp<View>,
    /**
   * `onShowResults` will be called when list is going to
   * show/hide results.
   */
    onShowResults?: (showResults) => void,
    /**
   * `onShowResults` will be called when list is going to
   * show/hide results.
   */
    onStartShouldSetResponderCapture?: () => boolean,
    /**
   * renders custom TextInput. All props passed to this function.
   */
    renderTextInput?: (props) => React.ReactNode,

    [key: string]: any
};

export const AutocompleteInput = (props: Props) => {

    function renderResultList(data, listProps) {
        const { style, ...flatListProps } = listProps;

        return <FlatList data={data} style={[styles.list, style]} {...flatListProps} />;
    }

    function renderTextInput() {
        const { renderTextInput: renderFunction, style } = props;
        const textProps = {
            style: [styles.input, style],
            // ...props,
        };

        return renderFunction(textProps);
    }

    const {
        data,
        containerStyle,
        hideResults,
        inputContainerStyle,
        listContainerStyle,
        onShowResults,
        onStartShouldSetResponderCapture,
        flatListProps,
    } = props;

    const showResults = data.length > 0;
    // Notify listener if the suggestion will be shown.
    onShowResults && onShowResults(showResults);
    return (
        <View style={[styles.container, containerStyle]}>
            <View style={[styles.inputContainer, inputContainerStyle]}>{renderTextInput()}</View>
            {!hideResults && (
                <View
                    style={listContainerStyle as any}
                    onStartShouldSetResponderCapture={onStartShouldSetResponderCapture}
                >
                    {showResults && renderResultList(data, flatListProps)}
                </View>
            )}
        </View>
    );
};

const defaultKeyExtractor = (_, index) => `key-${index}`;
const defaultRenderItem = ({ item }) => <Text>{item}</Text>;

AutocompleteInput.defaultProps = {
    data: [],
    keyboardShouldPersistTaps: "always",
    onStartShouldSetResponderCapture: () => false,
    renderTextInput: (props) => <TextInput {...props} />,
    flatListProps: {
        renderItem: defaultRenderItem,
        keyExtractor: defaultKeyExtractor,
    },
};

const border = {
    borderColor: "#b9b9b9",
    borderRadius: 1,
    borderWidth: 1,
};

const androidStyles = {
    container: {
        flex: 1,
    },
    inputContainer: {
        ...border,
        marginBottom: 0,
    },
    list: {
        ...border,
        backgroundColor: "white",
        borderTopWidth: 0,
        margin: 10,
        marginTop: 0,
    },
};

const iosStyles = {
    container: {
        zIndex: 1,
    },
    inputContainer: {
        ...border,
    },
    input: {
        backgroundColor: "white",
        height: 40,
        paddingLeft: 3,
    },
    list: {
        ...border,
        backgroundColor: "white",
        borderTopWidth: 0,
        left: 0,
        position: "absolute",
        right: 0,
    },
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: "white",
        height: 40,
        paddingLeft: 3,
    },
    ...Platform.select({
        android: androidStyles as any,
        ios: iosStyles,
        default: iosStyles,
    }),
});

export default AutocompleteInput;