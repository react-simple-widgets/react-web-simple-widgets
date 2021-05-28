import * as React from "react";
import { Variant } from "../../utils/constants";
import { fullTestProps } from "../../utils/UITestingHelper";


type Props = {
  fieldComponent: React.ReactElement,
  touched: Record<string, any>,
  onChange: (name) => (value, opts?) => void,
  onBlur: (name) => void,
  onFocus?: (name) => void,
  values: Record<string, any>,
  errors: Record<string, any>,
  name: string,
  isTrim?: boolean,
};

const FieldValidator = (props: Props) => {
    const {
        fieldComponent: FieldComponent,
        touched,
        values,
        onChange,
        onBlur,
        onFocus,
        isTrim,
        name,
        errors,
        ...restProps
    } = props;

    const error = errors[name] || {};

    React.useEffect(() => {
        if (error.error && error.errorMsg) {
            // do something
        }
    // eslint-disable-next-line
  }, [error.error, error.errorMsg]);

    const handleChange = (value, item) => {
        if (isTrim && value) {
            value = value.trim();
        }
        onChange(name)(value, item);
    };

    return (
        <FieldComponent
            variant={
                error.error
                    ? Variant.Error
                    : touched[name]
                        ? Variant.Success
                        : Variant.Default
            }
            errorMsg={error.errorMsg}
            {...restProps}
            value={values[name]}
            onChange={handleChange}
            onBlur={onBlur(name)}
            onFocus={onFocus(name)}
            {...fullTestProps("field-validator")}
        />
    );
};

export default FieldValidator;
