import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = [
  { id: nanoid(), name: "nada" },
  { id: nanoid(), name: "omran" },
];
const UserSlice = createSlice({
  name: "user",
  initialState,
  reducer: {},
});

export const selectAllUsers = (store) => store.user;
export default UserSlice.reducer;
