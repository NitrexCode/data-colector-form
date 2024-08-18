import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FormDataProps } from '../types/types'

const initialState: FormDataProps = {
  name: '',
  email: '',
  message: '',
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<Partial<FormDataProps>>) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { updateForm } = formSlice.actions
export default formSlice.reducer
