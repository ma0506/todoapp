import React, { useState } from 'react';
// import Button from '@material-ui/core/Button';

const Form = ({formAddTodos}) => {
    const [value,setValue] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        if(value.length <= 0) {
            alert('空っぽ')
            return ;
        }
        formAddTodos(value);
        setValue('');
            // console.log(value);
    }
    return (
        <>
            <form onSubmit = {handleSubmit}>
                <input type = 'text'
                value = {value}
                onChange = {e => {
                    setValue(e.target.value);
                }}/>
                {/* <Button>送信</Button> */}
                <button>送信</button>
            </form>
            {/* onClick allDelete */}
                {/* <button>全消</button> */}
        </>
    )
}
export default Form;