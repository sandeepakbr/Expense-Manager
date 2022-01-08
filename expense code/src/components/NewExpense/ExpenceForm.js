import React ,{useState} from 'react'
import './ExpenceForm.css';
const ExpenceForm = () => {
const [enteredTitle , setEnteredTitle] = useState('');
const [enteredDate , setEnteredDate] = useState('');
const [enteredAmount , setEnteredAmount] = useState('');
   const  titleChangeEventHandler = (event) =>{
         setEnteredTitle(event.target.value);
   }
   const  amountChangeEventHandler = (event) =>{
    setEnteredAmount(event.target.value);
}
const  dateChangeEventHandler = (event) =>{
    setEnteredDate(event.target.value);
}

/*
const [userInput,setUserInput] = useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:''
})
   const  titleChangeEventHandler = (event) =>{
         setUserInput({
             ...userInput,
             enteredTitle:event.target.value
         })
   }
   const  amountChangeEventHandler = (event) =>{
    setUserInput({
        ...userInput,
        enteredAmount:event.target.value
    })
}
const  dateChangeEventHandler = (event) =>{
    setUserInput({
        ...userInput,
        enteredDate:event.target.value
    })
}*/

const submitHandler = (event) =>{
    event.preventDefault();
    const expenseData = {
              title:enteredTitle,
              amount:enteredAmount,
              date: new Date(enteredDate)
    }
    console.log(expenseData);
}
    return (
        <form onSubmit = {submitHandler}>
           <div className='new-expense__controls'>
               <div className='new-expense__control'>
                  <label>Title</label>
                  <input type="text" onChange={titleChangeEventHandler}/>
               </div>
               <div className='new-expense__control'>
                  <label>Amount</label>
                  <input type="number" min="0.01" step="0.01" onChange={amountChangeEventHandler}/>
               </div>
               <div className='new-expense__control'>
                  <label>Date</label>
                  <input type="date" min="2021-09-12" max="2022-01-01" onChange={dateChangeEventHandler}/>
               </div>
           </div>
           <div className='new-expense__actions'>
               <button type='submit'>Add Expense</button>
           </div>
        </form>
    )
}

export default ExpenceForm
