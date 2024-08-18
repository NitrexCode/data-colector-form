export interface FormDataProps {
  name: string
  email: string
  message: string
}

export interface TextAreaFieldProps {
  label: string
  name: string
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface InputFieldProps {
  label: string
  name: string
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface ButtonProps {
  text: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

export interface FormFieldsProps {
  formData: FormDataProps
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
