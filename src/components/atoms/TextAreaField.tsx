import React from 'react'
import { TextField } from '@mui/material'

import { TextAreaFieldProps } from '../../types/types'

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  helperText,
  multiline = true,
  rows = 4,
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
      multiline={multiline}
      rows={rows}
      fullWidth={fullWidth}
      margin={margin}
      required={required}
    />
  )
}

export default TextAreaField
