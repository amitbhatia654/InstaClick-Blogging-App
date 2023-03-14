const { createSlice } = require('@reduxjs/toolkit')
var initialState = []
const LoginData = createSlice({
    name: "theuser",
    initialState,

    reducers: {
        loginFunction(state, action) {
            state.push(action.payload)
        },

        logoutFunction(state, action) {
           return state.filter((item)=>item._id !== action.payload._id)
        }
    }
})

export const { loginFunction, logoutFunction } = LoginData.actions
export default LoginData.reducer


