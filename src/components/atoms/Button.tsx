import React from 'react'
import { Button as MUIButton } from '@mui/material'

import { ButtonProps } from '../../types/types'

const Button: React.FC<ButtonProps> = ({ text, onClick, type = 'button' }) => {
  return (
    <MUIButton
      variant="contained"
      color="primary"
      onClick={onClick}
      type={type}
    >
      {text}
    </MUIButton>
  )
}

export default Button
