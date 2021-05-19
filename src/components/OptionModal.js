import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props)=>(
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearOption}
        contentLabel='Selected Option'
        closeTimeoutMS={200}
        className='modal'
    >
        <h3 className='modal__title'>You should </h3>
        {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
        <button className='button' onClick={ props.handleClearOption} >Okay</button>
    </Modal>
);

// const OptionModal = (props)=>{
//     return (
//         <Modal
//             isOpen={!!props.selectedOption}
//             onRequestClose={props.handleClearOption}
//             contentLabel='Selected Option'
//         >
//             <h3>You should do</h3>
//             {props.selectedOption && <p>{props.selectedOption}</p>}
//             <button onClick={ props.handleClearOption} >Okay</button>
//         </Modal>
//     );
// };

export default OptionModal;