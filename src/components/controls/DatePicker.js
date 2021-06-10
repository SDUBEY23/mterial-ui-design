import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import React from "react";

export default function DatePicker(props) {
  const { name, label, value, onChange } = props;
  const convertToDefaulteventParam = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        name={name}
        label={label}
        format="MM/dd/yyyy"
        value={value}
        onChange={(date) => onChange(convertToDefaulteventParam(name, date))}
      />
    </MuiPickersUtilsProvider>
  );
}
