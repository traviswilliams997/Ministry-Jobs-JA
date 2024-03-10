import { createSlice } from '@reduxjs/toolkit'
import mohService from '../../services/moh'
import mtmService from '../../services/mtm'
import miicService from '../../services/miic'
import moaService from '../../services/moa'

const intialState = {
  moh: [],
  mtm: [],
  miic: [],
  moa: [],
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
    setMoa: (state, action) => {
      state.moa = action.payload
      return state
    },
  },
})

export const { setMoh, setMtm, setMiic, setMoa } = globalSlice.actions

export const initializeMoh = () => {
  return async (dispatch) => {
    const posts = await mohService.getAll()
    dispatch(setMoh(posts))
  }
}

export const initializeMtm = () => {
  return async (dispatch) => {
    const posts = await mtmService.getAll()

    dispatch(setMtm(posts))
  }
}

export const initializeMiic = () => {
  return async (dispatch) => {
    const posts = await miicService.getAll()
    dispatch(setMiic(posts))
  }
}

export const initializeMoa = () => {
  return async (dispatch) => {
    const posts = await moaService.getAll()
    dispatch(setMoa(posts))
  }
}

export default globalSlice.reducer
