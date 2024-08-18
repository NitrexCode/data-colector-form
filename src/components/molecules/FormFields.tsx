import React from 'react'

import InputField from '../atoms/InputField'
import TextAreaField from '../atoms/TextAreaField'

interface FormFieldsProps {
  formData: {
    name: string
    email: string
    message: string
  }
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormFields: React.FC<FormFieldsProps> = ({ formData, handleChange }) => {
  return (
    <>
      <InputField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <InputField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextAreaField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
    </>
  )
}

export default FormFields
