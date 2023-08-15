import registro from "./login_operatios";

const { createSlice } = require("@reduxjs/toolkit")

const initialState={
    usuario: {name:null, email:null},
    token:null,
    isLogin:false,
    contacts: []
}

const loginSlice= createSlice({
    name:'login',
    initialState,
    extraREducer:{
        [registro.fulfilled](state, action){
            state.usuario=action.user;
            state.token=action.token;
        }
    }
})

export default loginSlice.reducer;