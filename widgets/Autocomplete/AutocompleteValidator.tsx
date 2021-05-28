import React from "react";
import FieldValidator from "../FieldValidator/FieldValidator";
import Autocomplete from "./Autocomplete";

const InputValidator = props => (
    <FieldValidator isTrim={true} {...props} fieldComponent={Autocomplete} />
);

export default InputValidator;
