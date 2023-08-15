import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

axios.defaults.baseURL='https://connections-api.herokuapp.com/'

const registro = createAsyncThunk(
    '/singup/',async(usuario, thunkAPI)=>{
        try{
           const response = await axios.post('/users/singup', usuario);
           return response.data;
        }catch(error){
            return thunkAPI.rejectWithValue("en este momento no esta disponible"+ error.message)
        }
    }
)
export default registro;