import './App.css';
import { useState } from 'react';
import data from './data.js';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'
import Main from './pages/Main.js';
import Cart from './pages/Cart';

function App() {

  let [book] = useState(data);
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
          <Route path="/" element = {<Main book = { book }/>} />
          <Route path="/cart/:id" element = {<Cart book = { book }/>} />

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
