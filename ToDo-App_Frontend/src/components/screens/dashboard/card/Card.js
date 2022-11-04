import React, { useState } from 'react';
import './card.css';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import AccessTime from '@mui/icons-material/AccessTime';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import PopUp from '../../popup/PopUp';
// import Modal from '../modal/Modal';

const Card = (props) => {

  const [popUpOpen, setPopUpOpen] = useState(false);


  return (
    <div className='card'
      draggable
      onDragEnter={() => props.handleDragEnter(props.card?.id, props.boardId)}
      onDragEnd={() => props.handleDragEnd(props.card?.id, props.boardId)}

    >
      <div className='top'>
        <p>{props.card?.title}</p>
        <div className='buttonGrp'>
          <DeleteOutline className='deleteIcon'
            onClick={() => { setPopUpOpen(true) }} />
          {popUpOpen ? <PopUp setPopUpOpen={setPopUpOpen} removeCard={props.removeCard} boardId={props.boardId}
            cardId={props.card?.id}
          /> : null}
          <ModeEditOutlineOutlinedIcon className='editIcon' onClick={() => props.setModalOpen(true)} />
        </div>
      </div>
      <div className='card_desc'>
        <p> {props.card?.desc}  </p>
      </div>
      <div className='card_footer'>
        <p> <AccessTime id='clock' />{`  `}{props.card?.date}</p>
      </div>
      <div>
        {/* {props.modalOpen?<Modal/>:null} */}
      </div>
    </div>
  )
}

export default Card