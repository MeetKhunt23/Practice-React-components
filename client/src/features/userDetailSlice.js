import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create aciton
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://64ae5258c85640541d4cd0f5.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    
    try {
      const result = await response.json();
      return result;
      // console.log(result); return false
    } catch (error) {
      return rejectWithValue(error);
      
    }
  }
);

var initalstate = {
  users: [],
  laoding: false,
  error: null,
};

const userDetail = createSlice({
  name: "userDetail",
  initialState: initalstate,
  extraReducers : {
    [createUser.pending] : (state) =>{
        state.laoding=true
    },
    [createUser.fulfilled] : (state,action) =>{
        state.laoding=false
        state.users.push(action.payload)
    },
    [createUser.rejected] : (state,action) =>{
        state.laoding=false
        state.users=action.payload
    }
  }
});

export default userDetail.reducer;
