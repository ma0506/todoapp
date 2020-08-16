import React, { useState } from 'react';
// import Checkbox from '@material-ui/core/Checkbox';

const Item = ({content,id,deleteItem}) => {
    const [isDone,setDone] = useState(false);

    const handleDelete = () => {
        deleteItem(id)
    }
    console.log(id);
    return (
        <li>
            <input type = 'checkbox' onChange = {() => {
                setDone(!isDone)}} />
            {/* <Checkbox
            onChange = {() => {
                setDone(!isDone);
            }} /> */}
            <span>{content}</span>
            <button onClick = {handleDelete}>削除</button>
        </li>
    )
}
export default Item;