import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers :{//reducer me always 2 chize ati h 1->state 2->action
        add:(state,action) =>{
            state.push(action.payload); //jo bhi input maine dispach me dala h usko 
                                        //payload action.payload se access kr skte h
        },
        remove : (state,action)=>{
            return state.filter((item) => item.id != action.payload);
            //mtld ish state ke ander vhi item ayegi jiski id dispach ke ander jo id hai
            // uske qual na ho 
        },
    }
});

export const {add,remove} = CartSlice.actions;
export default CartSlice.reducer;