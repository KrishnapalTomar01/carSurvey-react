import { Controller, Control } from "react-hook-form";
import { IUserResponse } from "../../Models/models";

type booleanParameterType = {
    control: Control<IUserResponse>,
    name: any,
    trueText: string,
    falseText: string
}

const BooleanInput = ({ control, name, trueText, falseText } : booleanParameterType) => {
    return (
      <Controller
        control={control}
        name={name}
        rules={{ validate: value => value != null }}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <>
            <label>
              <input
                className="me-1"
                type="radio"
                onBlur={onBlur} // notify when input is touched
                onChange={() => onChange(true)} // send value to hook form
                checked={value === true}
                // inputRef={ref}
              />
              {trueText}
            </label>
            <label className="ms-3">
              <input
                className="me-1"
                type="radio"
                onBlur={onBlur} // notify when input is touched
                onChange={() => onChange(false)} // send value to hook form
                checked={value === false}
                // inputRef={ref}
              />
              {falseText}
            </label>
          </>
        )}
      />
    );
  }

export default BooleanInput;