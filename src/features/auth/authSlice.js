import { createSlice } from "@reduxjs/toolkit";
import { signInUser, signUpUser } from "./authThunk";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    userId: null,
    status: "idle",
    error: null,
  },
  reducers: {
    setTokenFromStorage: (state, action) => {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
    },
    logout: (state) => {
      state.token = null;
      state.userId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.userId = action.payload.userId;
        state.status = "succeeded";

        // Start a logout timer for auto logout after 1 hour (3600000 ms)
        const expirationTime = 3600000; // 1 hour
        setTimeout(() => {
          store.dispatch(logout()); // Dispatch logout action after expiration time
        }, expirationTime);
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.userId = action.payload.userId;
        state.status = "succeeded";
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setTokenFromStorage, logout } = authSlice.actions;
export default authSlice.reducer;
