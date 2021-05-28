import React from "react";
import { fireEvent } from "react-native-testing-library";
import TextInput from "react-native-styled-paper/components/TextInput";
import { render } from "../utils/TestUtils";
import { Variant } from "../utils/constants";
import FieldValidator from "./FieldValidator";

describe("FieldValidator", () => {
    const name = "username";
    const onChangeFn = jest.fn();
    const onBlurFn = jest.fn();
    const onFocusFn = jest.fn();
    const baseProps = {
        name,
        touched: {
            [name]: false,
        },
        values: {
            [name]: "David",
        },
        errors: {},
        onChange: jest.fn().mockReturnValue(onChangeFn),
        onBlur: jest.fn().mockReturnValue(onBlurFn),
        onFocus: jest.fn().mockReturnValue(onFocusFn),
        fieldComponent: TextInput,
        label: "Given name",
    };

    describe("trim input value", () => {
        let fieldValidator;
        beforeAll(() => {
            fieldValidator = render(<FieldValidator {...baseProps} isTrim />);
        });

        it.skip("should match snapshot", () => {
            expect(fieldValidator).toMatchSnapshot();
        });

        it("should trim value when call onChange", () => {
            const textInput = fieldValidator.getByTestId("text_input");

            fireEvent(textInput, "onChangeText", " xxxxx ");
            expect(onChangeFn).toHaveBeenCalledWith("xxxxx", undefined);
        });
    });

    describe("variant", () => {
        let fieldValidator;
        const errors = {
            [name]: {
                error: true,
                errorMsg: "Error Message",
            },
        };
        beforeAll(() => {
            fieldValidator = render(
                <FieldValidator {...baseProps} errors={errors} />
            );
        });

        it("should be in error state", () => {
            const { props } = fieldValidator.getByTestId("field-validator");
            expect(props.variant).toBe(Variant.Error);
            expect(props.errorMsg).toBe("Error Message");
        });
    });
});
