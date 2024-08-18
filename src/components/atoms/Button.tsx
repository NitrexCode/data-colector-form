import React from 'react'
import { Button as MUIButton } from '@mui/material'

interface ButtonProps {
  text: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

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
