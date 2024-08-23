import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "count",
    initialState: 0,
    reducers: {
        updateCount: (state=0, action) => {
            if(action.type === "INCREMENT"){
                return state + 1;
            } else if ( action.type === "DECREMENT") {
                return state - 1;
            } else {
                return state;
            }
        } 
    }
});


export const { updateCount } = counterSlice.actions;
export default counterSlice.reducer;