import '../App.css';
import axios from 'axios';

function Main(props) {

    return (
        <>
              <div className = "main-bg"></div>

              <div className = "container">
                <div className="row">
                  
                  {
                    props.book.map((a, i) => {
                      return <Card book = {props.book[i]} i ={i}></Card>
                    })
                  }

                </div>
              </div>

              <button onClick = {() => {
                // ajax
                axios.get('http://codingapple1.github.io/shop/data2.json')
                .then((결과)=>{ 
                  console.log(결과.data)
                  let copy = [...props.book, ...결과.data];
                  props.setBook(copy);
                 })
                .catch(()=>{
                  console.log('실패했습니다')
                })

                axios.post('/sample', {name : 'kim'})

                Promise.all([ axios.get('/url1'), axios.get('/url2') ])
                .then(()=>{
                  
                })
              }} >더보기</button>
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