import React, { useState } from "react";
import './ExpenseForm.css';


const ExpenseForm = (props) => {

    const [enteredTitle, setenteredTitle] = useState('');
    const [enteredamount, setenteredamount] = useState('');
    const [entereddate, setentereddate] = useState('');

    const titleChangeHandler = (event) => {
        setenteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setenteredamount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setentereddate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredamount,
            date: new Date(entereddate)
        };
        props.onSaveExpenseData(expenseData);
        setenteredTitle('');
        setenteredamount('');
        setentereddate('');

        console.log(expenseData);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} placeholder="Enter The Title" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enteredamount} placeholder="Enter The Amount" min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={entereddate}  min='2019-01-01' max='2021-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
            <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm; 