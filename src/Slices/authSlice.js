import { createSlice } from "@reduxjs/toolkit";

const initialStage={
    signupData:null,
    loading:false,
    token:localStorage.getItem('token')?JSON.parse(localStorage.getItem('token')):null,
}

const authSlice=createSlice({
    name:'auth',
    initialState:initialStage,
    reducers:{
        setSignupData(state, value) {
            state.signupData = value.payload;
          },
          setLoading(state, value) {
            state.loading = value.payload;
          },
        setToken(state,value){
            state.token=value.payload
        }
    }
})
export const { setSignupData, setLoading, setToken } = authSlice.actions;
export default authSlice.reducer
