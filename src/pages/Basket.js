import { memo, useMemo, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "./../store/userSlice.js";
import { addCount } from "./store.js";

function 함수 () {
   return  // 반복문 10억번 돌린다면?
}

// 꼭 필요할 때만 재렌더링하려면 memo
// memo의 원리 : props 가 변할 때만 재렌더링함
// props가 길고 복잡하면 memo 안 쓰는게 더 나음
let  Child = memo( function() {
    console.log('재렌더링됨');
    return <div>자식</div>
} )

function Basket() {

    // 버튼누를때마다 이게 10억번 반복하니까 비효율적임 
    let result = 함수();
    //'이 때 useMemo 사용
    // 컴포넌트 렌터링시 1회만 실행함
    useMemo(() => { return 함수()});

    // redux store의 state 꺼내기
    let state = useSelector((state) => state);

    // store.js 로 요청보내주는 함수
    let dispatch = useDispatch();

    let [count, setCount] = useState();

    // let stock = useSelector((state) => {
    //     return state.stock
    // });
    console.log(state.cart[0]);
    // console.log(stock);

    return(
        <div>
            <Child></Child>
            <h6>{state.user.name} 의 장바구니</h6>
            <button onClick={() => { dispatch(changeName())}}>버튼</button>

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        state.cart.map((a, i) => 
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{state.cart[i].name}</td>
                            <td>{state.cart[i].count}</td>
                            <td>
                                <button onClick = { () => {
                                    dispatch(addCount(state.cart[i].id))
                                }}>+</button>
                            </td>
                        </tr>
                        )
                    }
                    
                </tbody>
            </Table>
        </div>
    ) 
    
}

export default Basket;