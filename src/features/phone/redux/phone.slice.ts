import { createSlice } from "@reduxjs/toolkit";
import { Telephone } from "../models/Telephone";

export type PhoneState = {
  phone: Telephone[];
};

const initialState: PhoneState = {
  phone: [],
};

const slicePhone = createSlice({
  name: "phone",
  initialState,
  reducers: {
    addNumber: (),
    resetNumber: (),
    call: (),
    hang: (),
  },
});

export const ac = slicePhone.actions;
export default slicePhone.reducer;
