import React from 'react';
import Item from './Item';

const List = ({listTodos,deleteTodo}) => {
    return (
        <ul>
            {
                listTodos.map(tood => {
                    return (
                        <Item content={tood.write} id={tood.id} 
                        key = {tood.id} deleteItem = {deleteTodo}/>
                        )
                })
            }
        </ul>
    )
}
export default List;