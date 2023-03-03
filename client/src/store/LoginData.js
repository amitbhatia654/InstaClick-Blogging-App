const {createSlice} =require('@reduxjs/toolkit')
var initialState=[]
const LoginData =createSlice({
    name:"theuser",
    initialState,

    reducers:{
        loginFunction(state,action){
            state.push(action.payload)
        },

        logoutFunction(state,action){
            //state.filter((item)=>console.log(item,'the logoute func is '))
        }
    }

})

export const {loginFunction ,logoutFunction} =LoginData.actions
export default LoginData.reducer