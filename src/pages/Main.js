import '../App.css';

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