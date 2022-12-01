import React from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
    // const [title,setTitle] = useState(props.tit);
    // const clickHandler = () => {
    //     setTitle('updated !');
    //     console.log(title) ;
    // }

    return (
        <Card className="expense-item">
            <ExpenseDate date = {props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.tit}</h2>
                <div className="expense-item__price">{props.amt}</div>
            </div>
            {/* <button onClick={clickHandler}>Click the button 2</button> */}
        </Card>
    );
}

export default ExpenseItem;