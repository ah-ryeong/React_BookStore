import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Basket() {

    // redux store의 state 꺼내기
    let state = useSelector((state) => {
        return state
    });

    // let stock = useSelector((state) => {
    //     return state.stock
    // });
    console.log(state.cart[0]);
    // console.log(stock);

    return(
        <div>
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
                            <td>안녕</td>
                            <td>안녕</td>
                        </tr>
                        )
                    }
                    
                </tbody>
            </Table>
        </div>
    ) 
    
}

export default Basket;