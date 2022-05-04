import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    userData: {
    }
}

export const userSignup = createAsyncThunk(
    'user/signup',
    async (userData)=>{
        try{
            console.log("Registering")
            const response = await fetch('https://demoapi490.herokuapp.com/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(userData)
            })
            const data = await response.json()
            console.log(data)
            return data.result.user
        } catch(error){
            console.log(error)
            return initialState
        }
    }
)

export const userSignin = createAsyncThunk(
    'user/signin',
    async (userData)=>{
        try{
            console.log("Registering")
            const response = await fetch('https://demoapi490.herokuapp.com/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(userData)
            })
            const data = await response.json()
            if(data.result){
                return data.result
            }
            else{
                return initialState
            }
        } catch(error){
            console.log(error)
            return initialState
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
        .addCase(userSignup.fulfilled,(state, action)=>{
            state.userData = action.payload;
        })
        .addCase(userSignup.rejected,(state, action)=>{
            state=initialState
        })
        .addCase(userSignin.fulfilled,(state, action)=>{
            state.userData = action.payload;
        })
        .addCase(userSignin.rejected,(state, action)=>{
            state=initialState
        })
    }
})

export const userActions = userSlice.actions
export default userSlice.reducer