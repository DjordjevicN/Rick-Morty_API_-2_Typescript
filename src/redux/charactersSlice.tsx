import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CharacterState {
  characters: any;
  next: string;
  prev: string;
}

const initialState: CharacterState = {
  characters: [],
  next: "",
  prev: "",
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    getCharacters: (state, action: PayloadAction<string>) => {
      state.characters = action.payload;
    },
    getNext: (state, action: PayloadAction<string>) => {
      state.next = action.payload;
    },
    getPrev: (state, action: PayloadAction<string>) => {
      state.prev = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getCharacters, getNext, getPrev } = characterSlice.actions;

export default characterSlice.reducer;
