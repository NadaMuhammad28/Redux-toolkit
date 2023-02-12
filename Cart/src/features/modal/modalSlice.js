import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});
const { openModal, closeModal } = modalSlice.actions;
export { openModal, closeModal };
export default modalSlice.reducer;
