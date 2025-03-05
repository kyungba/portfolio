import { createSlice } from '@reduxjs/toolkit';

const popState = createSlice({
  name: 'popState',
  initialState: {
    isPop: false,
    popData: []
  },
  reducers: {
    popOpen: (state:any, data:any) => {
      state.isPop = true
      state.popData = data
      document.body.style.overflow = 'hidden'
    },
    popClose: (state:any) => {
      state.isPop = false
      state.popData = []
      document.body.style.overflow = ''
    },
  },
});

export const { popOpen, popClose } = popState.actions;
export default popState.reducer;