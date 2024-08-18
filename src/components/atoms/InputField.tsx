import React from 'react'
import { TextField } from '@mui/material'

import { InputFieldProps } from '../../types/types'

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
}) => {
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      fullWidth
      margin="normal"
    />
  )
}

export default InputField
