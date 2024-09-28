import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch Language Data (English/Persian)
export const fetchLanguageData = createAsyncThunk(
  "language/fetchLanguageData",
  async (language, { rejectWithValue }) => {
    try {
      const response = await fetch(
        language === "english"
          ? "/Constants/Seedenglish.json"
          : "/Constants/Seedpersian.json"
      );
      if (!response.ok) throw new Error("Failed to fetch language data");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const languageSlice = createSlice({
  name: "language",
  initialState: {
    language: "english",
    data: null,
    status: "idle", // idle, loading, succeeded, failed
    error: null,
  },
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === "english" ? "persian" : "english";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLanguageData.pending, (state) => {
        state.status = "loading"; // Fetching in progress
      })
      .addCase(fetchLanguageData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeeded"; // Fetching successful
        state.error = null; // Clear error on success
      })
      .addCase(fetchLanguageData.rejected, (state, action) => {
        state.status = "failed"; // Fetching failed
        state.error = action.payload;
      });
  },
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
