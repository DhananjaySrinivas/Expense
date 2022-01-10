import React, { useState } from 'react';
import ExpenseList from './ExpenseList';
import './Expense.css';
import ExpenseChart from './ExpenseChart';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filtredExpense = props.item.filter(expenses => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

 
  return (
    <div>
    
      <Card className="expenses">
  
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
        <ExpenseChart expenses={filtredExpense}/>
       <ExpenseList item={filtredExpense}/>
       
      </Card>
    
    </div>);

}
export default Expense;