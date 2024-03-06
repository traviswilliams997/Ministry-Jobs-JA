import { createSlice } from '@reduxjs/toolkit'

const intialState = {
  moh: [],
  mtm: [],
  miic: [],
}
const globalSlice = createSlice({
  name: 'jobs',
  initialState: intialState,
  reducers: {
    setMoh: (state, action) => {
      state.moh = action.payload
    },
    setMtm: (state, action) => {
      state.mtm = action.payload
      return state
    },
    setMiic: (state, action) => {
      state.miic = action.payload
      return state
    },
  },
})

export const { setMoh, setMtm, setMiic } = globalSlice.actions

export const initializeMoh = () => {
  return async (dispatch) => {
    dispatch(setMoh())
  }
}

export const initializeMtm = () => {
  return async (dispatch) => {
    dispatch(setMtm(null))
  }
}

export const initializeMiic = () => {
  return async (dispatch) => {
    dispatch(setMiic())
  }
}

export default globalSlice.reducer
