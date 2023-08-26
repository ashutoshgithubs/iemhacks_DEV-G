import { createSlice } from "@reduxjs/toolkit";

const initialStage={
    user:null
}

const profileSlice=createSlice({
    name:'profile',
    initialState:initialStage,
    reducers:{
        setUser(state,value){
            state.user=value.payload
        }
    }
})
export const {setUser} =profileSlice.actions;
export default profileSlice.reducer
