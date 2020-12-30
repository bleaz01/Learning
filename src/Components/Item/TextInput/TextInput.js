
import React from "react";
import { useController , useForm} from "react-hook-form";


import './TextInputStyleSheet.scss';



const TextInput = ({ control, name, onSubmit , StyleTextInput, defaultValue}) => {

  const { handleSubmit, watch, errors } = useForm();
    onSubmit = data => console.log(data);


  const {
    field: { ref, ...inputProps },
    // state: { invalid, isTouched, isDirty },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: defaultValue,
  });

  return (
      <div className='TextInp-container'>
          {/* <form className={StyleTextInput} onSubmit={handleSubmit(onSubmit)}>
            <textarea className='TextInp-input' {...inputProps} inputRef={ref} />
          </form> */}
      </div>
    )
}


export default TextInput