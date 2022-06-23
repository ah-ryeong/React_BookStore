import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "./../store/userSlice.js";

function Basket() {

    // redux store의 state 꺼내기
    let state = useSelector((state) => state);

    // store.js 로 요청보내주는 함수
    let dispatch = useDispatch();

    // let stock = useSelector((state) => {
    //     return state.stock
    // });
    console.log(state.cart[0]);
    // console.log(stock);

    return(
        <div>
            <h6>{state.user.name}, {state.user.age}의 장바구니</h6>
            <button onClick={() => { dispatch(increase(100))}}>버튼</button>

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
                                    dispatch(changeName())
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