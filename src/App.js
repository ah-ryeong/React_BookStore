import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';

function App() {

  let [book] = useState(data);

  return (
    <div className="App">
    <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">Winter BookStore</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Cart</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <div className = "main-bg"></div>

      <div className = "container">
        <div className="row">
          
          {
            book.map((a, i) => {
              return <Card book = {book[i]} i ={i}></Card>
            })
          }

        </div>
      </div>

    </div>
  );
}

function Card(props) {
  return(
    <div>
      <div className="col-md-4">
          <img src = {props.book.img} height ="300px" />
          <h4>{props.book.title}</h4>
          <p>{props.book.price}</p>
        </div>
    </div>
  );
}

export default App;
