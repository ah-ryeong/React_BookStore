import { useContext, useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Context1 } from './../App.js';
import { addItem } from './store.js';

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
    let [탭, 탭변경] = useState(0);

    let dispatch = useDispatch();

    return (
        <div className="container">
            {
                alert == true
                ? <div className = 'alert alert-warning'>
                        2초이내 구매시 할인
                    </div>
                : null
            }

            <div className="row mb-5">
                <div className="col-md-6">
                    <img src = { 찾은상품.img} />
                </div>

                <div className="col-md-6">
                    <h4 ClassName="pt-5">{ 찾은상품.title }</h4>
                    <p>{ 찾은상품.content }</p>
                    <p>{ 찾은상품.price }원</p>
                    <button className="btn btn-danger" onClick={() => {
                        dispatch( addItem({ id : 1, name : '아무튼, 비건', count : 1 }) )
                    }}>주문하기</button>
                    {/* <Btn bg="blue" >버튼</Btn> */}
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => {탭변경(0)}} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {탭변경(1)}} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {탭변경(2)}} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent 탭 = {탭}/>

        </div>
    );
}

function TabContent({탭}) {
    // if(탭 == 0) {
    //     return <div>내용0</div>
    // } 
    // if(탭 == 1) {
    //     return <div>내용1</div>
    // } 
    // if (탭 == 2) {
    //     return <div>내용2</div>
    // }

    // tap state가 변할 때 end 부착 

    let [fade, setFade] = useState('');

    // state 사용은 useContext(Context) - > 보관함 해체해줌
    let { 재고, book } = useContext(Context1);

    useEffect(() => {
        // react의 automatic batching 기능
        setTimeout(() => { setFade('end') }, 100)

        return () => {
            setFade('')
        }
    }, [탭]);

    return (<div className={ `start ${fade}` }>
        { [<div>{재고}</div>, <div>내용1</div>, <div>내용2</div>][탭] }
    </div>)
}

export default Cart;