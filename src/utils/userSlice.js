import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            // action.payload is the user object from the API response 
            return action.payload;
        },
        removeUser:(state)=>{
            // state is the current user object in the store
            return null;
        }
    }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;