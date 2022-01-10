import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';


const ExpenseList =(props)=>{




if (props.item.length === 0)
{
return  <h2 className='expenses-list__fallback'> Found no Expenses </h2>
}

return(
    <ul className='expenses-list'>
        { props.item.map((expenses, index) => (<ExpenseItem key={index} title={expenses.title} amount={expenses.amount} date={expenses.date}/>
        ))}
    </ul>

)
}
export default ExpenseList;

