import '../App.css';
import { useState } from 'react';
import data from '../data.js';

function Main() {

    let [book] = useState(data);

    return (
        <>
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
            </>
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

export default Main;