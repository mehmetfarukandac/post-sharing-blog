import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: { posts:[] },
  reducers: {
    updateState(state, action) {
      const params = action.payload;
      Object.keys(params).map((i) => {
        return (state[i] = params[i]);
      });
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice;
