import React, { useState } from 'react'

import { FormFieldsProps } from '../../types/types'
import { InputField, TextAreaField } from '../atoms'

const FormFields: React.FC<FormFieldsProps> = ({ formData, handleChange }) => {
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  })

  const validate = () => {
    let valid = true
    let newErrors = { name: '', email: '', message: '' }

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
      valid = false
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
      valid = false
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
      valid = false
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
      valid = false
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleBlur = (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-undef
    _e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    validate()
  }

  return (
    <>
      <InputField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={Boolean(errors.name)}
        helperText={errors.name}
        fullWidth
        margin="normal"
        required
      />
      <InputField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={Boolean(errors.email)}
        helperText={errors.email}
        fullWidth
        margin="normal"
        required
      />
      <TextAreaField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        onBlur={handleBlur}
        error={Boolean(errors.message)}
        helperText={errors.message}
        multiline
        rows={4}
        fullWidth
        margin="normal"
      />
    </>
  )
}

export default FormFields
