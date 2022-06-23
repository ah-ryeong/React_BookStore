import { configureStore, createSlice } from '@reduxjs/toolkit'

// state 만들기
// useState 같은거
let user = createSlice({
  name: `user`,
  initialState: { name : 'kim', age : 20 },

  // 1. state 수정해주는 함수 만들기 -> 이후에 원할 때 그 함수 실행해달라고 store.js에 요청해야함
  reducers : {
    changeName(state) {
      // array or object 의 경우 직접수정해도 state 변경됨
      state.name = 'park'
    },

    increase(state, action) {
      state.age += action.payload
    }
  }
});

// 2. 함수 export 하기 
export let { changeName, increase } = user.actions;

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