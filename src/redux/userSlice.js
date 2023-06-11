import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",

  initialState : {
    userData: {
      name: "",
      age: "",
    },
    loading: null,
    error: null,
  },

  reducers: {
    addUser: (state, action) => {
      state.userData.name = action.payload.name;
    },

    addAge: (state, action) => {
      state.userData.age = action.payload.age;
    },

    startUser: (state) => {
      state.loading = true;
    },

    successUser: (state, action) => {
      state.userData = action.payload;
      state.loading = false;
    },

    errorUser: (state) => {
      state.loading = false;
      state.error = false;
    },
  },
});

export const { addUser, addAge, startUser, successUser, errorUser } =
  userSlice.actions;
export default userSlice.reducer;
