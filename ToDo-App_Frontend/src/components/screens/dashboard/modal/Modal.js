import React, { useState } from 'react';
import './modal.css';
import CloseIcon from '@mui/icons-material/Close';


const Modal = (props) => {
    const [values, setValues] = useState({
        title: "",
        desc: "",
        date: new Date().toISOString().slice(0, 10)

    });

    const addCard = () => {
        const card = {
            id: Date.now() + Math.random(),
            title: values.title,
            desc: values.desc,
            date: values.date
        };

        const tempBoards = [...props?.board];
        tempBoards[0].cards.push(card);
        props.setBoards(tempBoards)
    };


    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }


    return (
        <div className='modalBg' >
            <form className='modalContainer' onSubmit={(event) => {
                event.preventDefault();
                if (props.onSubmit) props.onSubmit(values);
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
                        <input type='text' name='title' value={values.title} onChange={handleInputChange} placeholder={props.placeholderTitle} />
                    </div>
                </div>
                <div className='modalBody'>
                    <div className='modalDescTitle'>
                        Description
                    </div>
                    <div className='modalDescBox'>
                        <input type='text' name='desc' value={values.desc} onChange={handleInputChange} placeholder={props.placeholderDesc} />
                    </div>
                </div>
                <div className='date_dd'>
                    <input type='date' name='date' value={values.date} onChange={handleInputChange} className='date' />
                    {/* <select id='dropdown' className='dropdown'>
                        <option value='status'>All</option>
                        <option value='In progress'>Completed</option>
                        <option value='complete'>In progress</option>
                    </select> */}
                </div>
                <div className='modalFooter'>
                    <button type='submit' onClick={addCard}>{props.buttonAdd || "update"}</button>
                </div>
            </form>
        </div>
    )
}

export default Modal