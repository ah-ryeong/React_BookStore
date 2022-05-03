import { useEffect, useState } from 'react';
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

    useEffect(()=>{
        // mount, update시 여기 코드 실행
        // 렌더링 후에 동작함
        // 여기 적는 코드 -> 어려운 연산, 서버에서 데이터 가져오는 작업, 타이머 장착하는거

        // 타이머
        let a = setTimeout( () => {
            setAlert(false)
        }, 2000)

        // useEffect 동작 전에 실행됨
        // clean up function
        // 참고 : mount시 실행 안 되는데 unmount(컴포넌트 삭제되는거)시는 실행됨;
        return () => {
            // 코드
            // 리엑트는 계속 재렌더링되니까 타이머를 쓰면 무한타이머가 될 수 있어서 
            // 기존 타이머는 제거해달라는 코드를 작성하면 먼저 실행하면서 타이머 제거함
            clearTimeout(a)
        }

    }, []);


    // useEffect
    // 1. 재렌더링마다 코드실행하고싶으면 : useEffect( ()=> {} )
    // 2.. mount시 1회 코드실행하고 싶으면  : useEffect( ()=>{}, [] )
    // 3. 삭제될 때(unmount) 코드 실행하고 싶으면 
    // useEffect( ()=>{ return()=>{} }, [] )
    

    let {id} = useParams();
    let 찾은상품 = props.book.find(function(x){
        return x.id == id
    });

    let [alert, setAlert] = useState(true);

    return (
        <div className="container">
            {
                alert == true
                ? <div className = 'alert alert-warning'>
                        2초이내 구매시 할인
                    </div>
                : null
            }

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