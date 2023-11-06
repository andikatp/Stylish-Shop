
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

const accessToken = localStorage.getItem("access_token");
const config = {
  headers: {
    "Content-Type": "application/json",
    access_token: `${accessToken}`,
  },
  withCredentials: true,
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await axios.get("http://localhost:3000/users", config);
  return response.data;
});

export const saveUsers = createAsyncThunk(
  "users/saveUsers",
  async ({ name, email, password }) => {
    const response = await axios.post(
      "http://localhost:3000/users/create_admin",
      {
        name,
        email,
        password,
      }
    );
    return response.data;
  }
);

export const deleteUsers = createAsyncThunk("users/deleteUsers", async (id) => {
  await axios.delete(`http://localhost:3000/users/delete_account/${id}`,config);
  return id;
});

// export const updateUsers = createAsyncThunk('users/updateUsers',async({id,name,email,password})=>{
//     const response=await axios.put(`http://localhost:3000/users/edit_user/${id}`,{
// })

const userEntity = createEntityAdapter({
  selectId: (users) => users.id,
});

const userSlice = createSlice({
  name: "users",
  initialState: userEntity.getInitialState(),
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      state.status = "success";
      userEntity.setAll(state, action.payload);
    },
    [getUsers.pending]: (state) => {
      state.status = "loading";
    },
    [getUsers.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    },
    [saveUsers.fulfilled]: (state, action) => {
      userEntity.addOne(state, action.payload);
    },
    [deleteUsers.fulfilled]: (state, action) => {
      userEntity.removeOne(state, action.payload);
    },
  },
});
export const userSelectors = userEntity.getSelectors((state) => state.users);
=======
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userApi } from "../api";

const initialState = {
    loading: false,
    error: null,
    data: null,
};




export const getUser = createAsyncThunk("/get_user_admin", async (accessToken) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            withCredentials: true,
        };
        const response = await userApi.get("/get_user_admin", config);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const userSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.data = action.payload;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error || "An error occurred. Please try again.";
                console.log(action.error);
            });
    },
});


export default userSlice.reducer;