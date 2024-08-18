import React from 'react'

import { InputField, TextAreaField } from '../atoms'
import { FormFieldsProps } from '../../types/types'

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
