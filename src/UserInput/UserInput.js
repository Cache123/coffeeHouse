import React from 'react';

const userInput = (props) => {
    return (
        <div onClick={ props.toggleShow }> 
            <input
                type="text"
                value={ props.name }
                onChange={ props.changeNames }
            />
        </div>
    )
}

export default userInput;