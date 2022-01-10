import React,{useState} from 'react';
import './NewExpense.css'
import ExpenseFrom from './ExpenseForm'
const NewExpense = (props) => {

    const [isEditiong, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
    const startEditingHandler=()=>{
        setIsEditing(true);
    };
    const stopEditingHandler=()=>{
        setIsEditing(false);
    };
    return (

        <div className="new-expense">
            <h1>Expense Tracker </h1>
           {!isEditiong && <button onClick={startEditingHandler}>Add New Expense </button> }
          {isEditiong &&  <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>


    );
};

export default NewExpense;