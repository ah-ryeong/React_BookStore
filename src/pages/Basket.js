import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Basket() {

    // redux store의 state 꺼내기
    let 전체 = useSelector((state) => {
        return state
    });

    let stock = useSelector((state) => {
        return state.stock
    });
    console.log(전체.user);
    console.log(stock);

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
                    <tr>
                        <td>1</td>
                        <td>안녕</td>
                        <td>안녕</td>
                        <td>안녕</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    ) 
    
}

export default Basket;