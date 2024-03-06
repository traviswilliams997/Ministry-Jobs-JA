import { createSlice } from '@reduxjs/toolkit'
import mohService from '../../services/moh'
import mtmService from '../../services/mtm'
import miicService from '../../services/miic'

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
    const posts = await mohService.getAll()
    console.group('Initalized moh', posts[0])
    dispatch(setMoh(posts))
  }
}

export const initializeMtm = () => {
  return async (dispatch) => {
    const posts = await mtmService.getAll()

    console.group('Initalized mtm', posts[0])

    dispatch(setMtm(posts))
  }
}

export const initializeMiic = () => {
  return async (dispatch) => {
    const posts = await miicService.getAll()
    console.group('Initalized miic', posts[0])
    dispatch(setMiic(posts))
  }
}

export default globalSlice.reducer
