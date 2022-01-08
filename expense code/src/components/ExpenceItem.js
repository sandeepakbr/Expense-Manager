import React ,{useState} from 'react'
import './ExpenceItem.css'
import ExpenceDate from './ExpenceDate';
import Card from './Card'
function ExpenceItem(props) {

    const [title,setTitle] = useState(props.title);

    const clickHandeler = () =>{
         setTitle("Updated!!!")
    }
   
    return (
        <Card className="expense-item">
            <ExpenceDate date={props.date}/>
            <div  className="expense-item__description">
               <h2>{title}</h2>
               <div className="expense-item__price ">${props.amount}</div>
            </div>
            <button onClick={clickHandeler}>Change Type</button>
        </Card>
    )
}

export default ExpenceItem
