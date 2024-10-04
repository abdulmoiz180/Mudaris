import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@utils/firebase";
import { logout, setTokenFromStorage } from "./authSlice";
import Cookies from "js-cookie";
// Sign Up User
export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      Cookies.set("token", user.accessToken, { expires: 7 });
      Cookies.set("userId", user.uid, { expires: 7 });
      //   return { token: user.accessToken, userId: user.uid };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { dispatch }) => {
    try {
      // Sign out the user from Firebase
      await auth.signOut();

      // Clear cookies
      Cookies.remove("token");
      Cookies.remove("userId");

      // Dispatch the logout action to clear state
      dispatch(logout());
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  }
);
export const signInUser = createAsyncThunk(
  "auth/signInUser",
  async ({ email, password }, { rejectWithValue, dispatch }) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      Cookies.set("token", user.accessToken, {
        expires: 7,
        secure: true,
        sameSite: "Lax", // Or "Strict"
      });

      Cookies.set("userId", user.uid, { expires: 7 });

      dispatch(
        setTokenFromStorage({
          token: user.accessToken,
          userId: user.uid,
        })
      );

      return { token: user.accessToken, userId: user.uid };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const checkAutoLogin = () => (dispatch) => {
  const storedToken = Cookies.get("token");
  const storedUserId = Cookies.get("userId");
  console.log("Stored Token from Cookies:", storedToken);
  if (storedToken && storedUserId) {
    dispatch(
      setTokenFromStorage({
        token: storedToken,
        userId: storedUserId,
      })
    );
  } else {
    dispatch(logout()); // If no token, ensure the user is logged out
  }
};
