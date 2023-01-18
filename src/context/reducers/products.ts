import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type instanceCount = {
  products: [];
};

const initialState: instanceCount = {
  products: [],
};

const slice = createSlice({
  name: "PRODUCTS",
  initialState,
  reducers: {
    GETPRODUCT(_, action: PayloadAction<[]>) {
      return {
        products: action.payload,
      };
    },
  },
});

export const { GETPRODUCT } = slice.actions;

export default slice.reducer;
