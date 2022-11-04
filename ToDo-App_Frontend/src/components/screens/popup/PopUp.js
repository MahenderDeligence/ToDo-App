import React from 'react';
import './popup.css';

const PopUp = (props) => {
    return (
        <div className='popUp_bg'>
            <div className='popUp'>
                <div className='text'>
                    <p>
                        Are you sure?
                    </p>
                </div>
                <div className='popUp__footer'>
                    <button id='cancelPopUp' type='submit' onClick={() => {
                        props.setPopUpOpen(false);
                    }}>
                        Cancel
                    </button>
                    <button id='OkPopUp' type='submit' onClick={() => props.removeCard(props.cardId, props.boardId)} >
                        OK
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PopUp