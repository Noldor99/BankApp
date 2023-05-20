import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TodoState {
  TitleHeader: string;
}

const initialState: TodoState = {
  TitleHeader: 'Home'
};

const paramSlice = createSlice({
  name: 'param',
  initialState,
  reducers: {
    setTitleHeader: (state, action: PayloadAction<string>) => {
      state.TitleHeader = action.payload
    },
  }
})

export const { setTitleHeader } = paramSlice.actions;

export default paramSlice.reducer;
