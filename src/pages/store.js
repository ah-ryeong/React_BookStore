import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './../store/userSlice.js';

let stock = createSlice({
  name: `stock`,
  initialState: [10, 11, 12]
});

let cart = createSlice({
  name: `cart`,
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 1, name : 'Grey Yordan', count : 1}
  ]
});

// store 생성
export default configureStore({
  reducer: { 
    // 위에서 만든 state 등록
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
  }
}) 