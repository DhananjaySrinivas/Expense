import React, { useState} from 'react';
import Expense from './Component/Expense/Expense';
import './App.css';
import NewExpense from './Component/NewExpense/NewExpense'

  const DUMMY_EXPENSES = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'Tv', amount: 354.67, date: new Date(2021, 3, 3) },
    { title: 'Watch', amount: 454.67, date: new Date(2021, 4, 28) },
    { title: 'Bike', amount: 999.67, date: new Date(2021, 5, 24) },
  ];

  const  App =() =>{

    const [expense, setExpense]= useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expenses) =>{
    setExpense((preExpenses)=>{
     return ([expenses, ...preExpenses]);
    });
  };
  return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expense item ={expense}/>
    </div>
  );
} 


export default App;
