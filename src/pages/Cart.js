import { useParams } from 'react-router-dom';

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
                </div>
            </div>
        </div>
    );
}

export default Cart;