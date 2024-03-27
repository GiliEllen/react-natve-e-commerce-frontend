import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user:{
            _id: null,
            name: null,
            email: null,
            password: null,
            role: null
        }
    },
    reducers: {
        setUser: (state, action)=>{
            const {_id,name,email,password,role} = action.payload;
            state.user = {_id,name,email,password,role};
        },
        clearUser: (state)=>{
            state.user = {
                _id: null,
                name: null,
                email: null,
                password: null,
                role: null
            }
        }
    }
})



export const {setUser,clearUser} = userSlice.actions;
export const selectUserState = ((state) => state.user)
export default userSlice.reducer;