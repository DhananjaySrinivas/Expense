import React from 'react';
import './ChatBar.css';


const ChatBar = (props) => {
    let barFillHieght = '0%';

    if (props.maxValue> 0) {
        barFillHieght = Math.round((props.value / props.maxValue) * 100) + '%'
    }
    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{height : barFillHieght}}> </div>
            </div>
            <div className='chart-bar__label'>




            </div>
        </div>
    );
};
export default ChatBar;