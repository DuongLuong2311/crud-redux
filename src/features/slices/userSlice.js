import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const url = "http://localhost:5000/users"

export const getUserItems = createAsyncThunk(
  'user/getUserItems',
  async (name, thunkAPI) => {
    try {
      const resp = await axios(url)
      return resp
    }
    catch (err) {
      return thunkAPI.rejectWithValue("Something Went Wrong!")
    }
  }
)

const userSlice = createSlice({
  name: "user",
  initialState: {

  },
  reducers: {
    getUsers(state) {

    },
    addUser(state) {

    },
    editUser(state) {

    },
    deleteUser(state) {

    },
  },
  extraReducers: {
    [getUserItems.pending] (state) {

    },
    [getUserItems.fulfilled](state, action) {

    },
    [getUserItems.rejected](state, action) {

    }
  }
})

export const actionUser = userSlice.actions

export default userSlice