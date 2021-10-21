import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayMenu: true,
  displayForm: false,
  displayContact: false,
};
const allFalse = {
  displayMenu: false,
  displayForm: false,
  displayContact: false,
};
const LayoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    goToDisplayMenu: () => {
      return { ...allFalse, displayMenu: true };
    },
    goToDisplayForm: () => {
      return { ...allFalse, displayForm: true };
    },
    goToDisplayContact: () => {
      return { ...allFalse, displayContact: true };
    },
  },
});
export const { goToDisplayContact, goToDisplayForm, goToDisplayMenu } =
  LayoutSlice.actions;
export default LayoutSlice.reducer;
