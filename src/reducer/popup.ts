import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BuildItem {
  app: string;
  color: string;
  href: string;
  id: string;
  imgSize: number;
  gifSize?: number;
  ing: string;
  name: string;
  responsive: string;
  skill?: string[];
}

interface PopState {
  isPop: boolean;
  popData: BuildItem | null;
}

const initialState: PopState = {
  isPop: false,
  popData: null,
};

const popStateSlice = createSlice({
  name: 'popState',
  initialState,
  reducers: {
    popOpen: (state, action: PayloadAction<BuildItem>) => {
      state.isPop = true;
      state.popData = action.payload;
      document.body.style.overflow = 'hidden';
    },
    popClose: (state) => {
      state.isPop = false;
      state.popData = null;
      document.body.style.overflow = '';
    },
  },
});

export const { popOpen, popClose } = popStateSlice.actions;
export default popStateSlice.reducer;