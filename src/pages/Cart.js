import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let Btn = styled.button`
    background : ${ props => props.bg };
    color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
    padding : 10px;
`

let box = styled.div`
    background : grey;
    padding : 20px;
`

function Cart(props) {

    let {id} = useParams();
    let 찾은상품 = props.book.find(function(x){
        return x.id == id
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src = { 찾은상품.img} />
                </div>

                <div className="col-md-6">
                    <h4 ClassName="pt-5">{ 찾은상품.title }</h4>
                    <p>{ 찾은상품.content }</p>
                    <p>{ 찾은상품.price }원</p>
                    <button className="btn btn-danger">주문하기</button>
                    {/* <Btn bg="blue" >버튼</Btn> */}
                </div>
            </div>
        </div>
    );
}

export default Cart;