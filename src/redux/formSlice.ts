import { createSlice } from '@reduxjs/toolkit'

import { FormData } from '../types/types'

const initialState: FormData = {
  name: '',
  email: '',
  message: '',
}

const formSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    updateForm: (state, action) => {
      return { ...state, ...action.payload }
    },
  },
})

export default formSlice.reducer
