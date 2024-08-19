export interface FormDataProps {
  name: string
  email: string
  message: string
}

export interface TextAreaFieldProps {
  label: string
  name: string
  value: string
  onChange: (
    _e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  onBlur?: (
    _e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  error?: boolean
  helperText?: string
  multiline?: boolean
  rows?: number
  fullWidth?: boolean
  margin?: 'none' | 'dense' | 'normal'
  required?: boolean
}

export interface InputFieldProps {
  label: string
  name: string
  value: string
  onChange: (_e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (
    _e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  error?: boolean
  helperText?: string
  fullWidth?: boolean
  margin?: 'none' | 'dense' | 'normal'
  required?: boolean
}

export interface ButtonProps {
  text: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

export interface FormFieldsProps {
  formData: FormDataProps
  handleChange: (
    _e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
}
