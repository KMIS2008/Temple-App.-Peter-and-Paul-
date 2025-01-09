import {addServices, fetchService} from '../operations';
import { createSlice} from '@reduxjs/toolkit';

const allServices ={
    services:[],
    isLoading: false,
    error: false, 
}

const handlPending = (state)=> {
    state.isLoading = true}

const handlFulfilled = (state, action)=>{
        state.services = action.payload;
        state.isLoading = false;
        state.error = null;
     }

const handlFulfilledAdd = (state, action)=>{
        state.services.push(action.payload);
        state.isLoading = false;
        state.error = null;
      }

const handlReject =(state, action)=>{
        state.isLoading = false;
        state.error = action.payload;
    }

const serviceSlice = createSlice({
    name:'services',
    initialState: allServices,
       
       extraReducers:
       builder=>{
        builder.addCase(fetchService.pending, handlPending)
        .addCase(fetchService.fulfilled, handlFulfilled)
        .addCase(fetchService.rejected, handlReject)
        .addCase(addServices.pending, handlPending)
        .addCase(addServices.fulfilled, handlFulfilledAdd)
        .addCase(addServices.rejected, handlReject)

       }
})

export const serviceReducer = serviceSlice.reducer;