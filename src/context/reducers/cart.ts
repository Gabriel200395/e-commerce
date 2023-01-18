import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type instanceCount = {
  shoppingCart: [];
};

const initialState: instanceCount = {
  shoppingCart: [],
};

const slice = createSlice({
  name: "SHOOPING_CART",
  initialState,
  reducers: {
    ADDCARTPRODUCT(_, action: PayloadAction<[]>) {
      return {
        shoppingCart: action.payload,
      };
    },
  },
});

export const { ADDCARTPRODUCT } = slice.actions;

export default slice.reducer;
