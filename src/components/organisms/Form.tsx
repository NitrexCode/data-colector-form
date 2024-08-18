import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootState } from '../../redux/store'
import { updateForm } from '../../redux/formSlice'
import { FormFields, Button } from '../'

const Form: React.FC = () => {
  const formData = useSelector((state: RootState) => state.form)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateForm({ [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem('formData', JSON.stringify(formData))

    const fileData = new Blob([JSON.stringify(formData)], {
      type: 'application/json',
    })
    const url = URL.createObjectURL(fileData)
    const link = document.createElement('a')
    link.href = url
    link.download = 'formData.json'
    link.click()

    navigate('/thanks')
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormFields formData={formData} handleChange={handleChange} />
      <Button text="Submit" type="submit" />
    </form>
  )
}

export default Form
