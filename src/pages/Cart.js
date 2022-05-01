function Cart() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src = "http://image.kyobobook.co.kr/images/book/large/447/l9791186602447.jpg" />
                </div>

                <div className="col-md-6">
                    <h4 ClassName="pt-5">상품명</h4>
                    <p>상품 설명</p>
                    <p>가격</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;