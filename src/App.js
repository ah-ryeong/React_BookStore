import './App.css';
import { createContext, useEffect, useState } from 'react';
import data from './data.js';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'
import Main from './pages/Main.js';
import Cart from './pages/Cart';
import Basket from './pages/Basket';

// context 세팅 (context = state 보관함)
export let Context1 = createContext();

function App() {

  // array  나 object 자료 서버없이 저장
  // let obj = { name :  'kim' }
  // localStorage.setItem('data', JSON.stringify(obj));
  // let 꺼낸것 = localStorage.getItem('data');
  // console.log(JSON.parse(꺼낸것));
  // console.log(JSON.parse(꺼낸것).name);

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify([]))
  }, []);

  let [book, setBook] = useState(data);
  let [재고] = useState([10, 11, 12]);
  // 페이지 이동 도와줌
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
          <Container>
          <Navbar.Brand href="/">Winter BookStore</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick = { () => { navigate('/') } }>Home</Nav.Link>
            <Nav.Link onClick ={ () => { navigate('/cart') } }>Cart</Nav.Link>
            <Nav.Link onClick ={ () => { navigate('/event') } }>Event</Nav.Link>
            <Nav.Link onClick ={ () => { navigate('/about') } }>About</Nav.Link>
          </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element = {<Main book = { book } setBook ={setBook}/>} />
          <Route path="/cart/:id" element = {
            <Context1.Provider value={ { 재고, book } }>
              <Cart book = { book }/>
            </Context1.Provider>
          } />

          <Route path="/event" element = {<Event />}>
            <Route path="one" element = { <div>첫 주문시 책갈피 증정</div> } />
            <Route path="two" element = { <div>생일기념 쿠폰받기</div> } />
          </Route>

          {/* nested routes */}
          {/* 여러페이지가 필요한데, 페이지상 차이가 별로 없을 때 사용하면 됨 */}
          <Route path="/about" element = {<About />}>
            <Route path="member" element = { <div>member</div> } />
            <Route path="location" element = { <div>위치정보</div>} />
          </Route>
          
          <Route path="/*" element = { <div>없는 페이지입니다.</div> } />

          <Route path='/basket' element = {<Basket />} />
        </Routes>
        

    </div>
  );
}


function About() {
  return (
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
