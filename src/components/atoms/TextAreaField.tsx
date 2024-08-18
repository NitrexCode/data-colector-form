import React from 'react'
import { TextField } from '@mui/material'

import { TextAreaFieldProps } from '../../types/types'

const TextAreaField: React.FC<TextAreaFieldProps> = ({
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
      multiline
      rows={4}
    />
  )
}

export default TextAreaField
