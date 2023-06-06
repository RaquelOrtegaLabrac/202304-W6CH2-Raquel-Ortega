import { createSlice } from "@reduxjs/toolkit";

export type PhoneState = {
  phone: Telephone;
};

const initialState: PhoneState = {
  phone: [],
};

const slicePhone = createSlice({
  name: "phone",
  initialState,
  reducers: {},
});

export const ac = slicePhone.actions;
export default slicePhone.reducer;
