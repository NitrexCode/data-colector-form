import React from 'react'
import { TextField } from '@mui/material'

import { InputFieldProps } from '../../types/types'

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  helperText,
  fullWidth,
  margin,
  required,
}) => {
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      margin={margin}
      required={required}
    />
  )
}

export default InputField
