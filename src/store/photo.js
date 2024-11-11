import { createSlice } from "@reduxjs/toolkit";
import { PHOTO_GET } from "../api";

const photo = createSlice({
  name: "photo",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchError(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    resetPhotoState(state) {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
});

const { fetchStarted, fetchSuccess, fetchError, resetPhotoState } =
  photo.actions;

export const fetchPhoto = (id) => async (dispatch) => {
  try {
    dispatch(resetPhotoState());
    dispatch(fetchStarted());
    const { url, options } = PHOTO_GET(id);
    const response = await fetch(url, options);
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};

export default photo.reducer;
