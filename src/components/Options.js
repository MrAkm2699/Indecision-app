import React from 'react';
import Option from './Option'

const Options = (props) => (
    <div>
        <div className='widget-header'>
            <h3 className='widget-header__title'>Your options are</h3>
            <button
                className='button button--link'
                onClick={props.handleDelete}
            >
                Remove all
    </button>

        </div>

        {props.options.length === 0 && <p className='widget-message'>No options available ! Please add an option </p>}
        {
            props.options.map((option,index) => (
                <Option
                    key={option}
                    optionCom={option}
                    count={index+1}
                    handleDeleteOption={props.handleDeleteOption}
                />))
        }
    </div>
);

export default Options;