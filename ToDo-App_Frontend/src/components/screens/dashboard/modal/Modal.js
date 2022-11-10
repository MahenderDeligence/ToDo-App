import React from 'react';
import './modal.css';
import CloseIcon from '@mui/icons-material/Close';


const Modal = (props) => {

    return (
        <div className='modalBg' >
            <form className='modalContainer' onSubmit={(event) => {
                event.preventDefault();
                if (props.onSubmit) props.onSubmit(props.values);
                props.setModalOpen(false);
            }}>
                <div className='modalTitleSection'>
                    <div className='modalTitle'>
                        <p>Title</p>
                        <CloseIcon id='modalCloseIcon' onClick={() => {
                            props.setModalOpen(false);
                        }} />
                    </div>
                    <div className='modalTitleBox'>
                        <input type='text' name='title' value={props.values.title} onChange={props.handleInputChange} placeholder={props.placeholderTitle} />
                    </div>
                </div>
                <div className='modalBody'>
                    <div className='modalDescTitle'>
                        Description
                    </div>
                    <div className='modalDescBox'>
                        <input type='text' name='desc' value={props.values.desc} onChange={props.handleInputChange} placeholder={props.placeholderDesc} />
                    </div>
                </div>
                <div className='date_dd'>
                    <input type='date' name='date' value={props.values.date} onChange={props.handleInputChange} className='date' />
                </div>
                <div className='modalFooter'>
                    <button type='submit' onClick={props.addCard}>{props.buttonAdd || "update"}</button>
                </div>
            </form>
        </div>
    )
}

export default Modal