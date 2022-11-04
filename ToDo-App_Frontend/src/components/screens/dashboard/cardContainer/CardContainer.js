import React from 'react';
import './cardContainer.css';
import Card from '../card/Card';

const CardContainer = (props) => {
  return (
    <div className='cardContainer'>
      {
        props.board?.cards?.map((item) => (
          <Card key={item.id} card={item}
            cardId={props.card?.id}
            removeCard={props.removeCard}
            modalOpen={props.modalOpen}
            setModalOpen={props.setModalOpen}
            setBoards={props.setBoards}
            handleDragEnd={props.handleDragEnd}
            handleDragEnter={props.handleDragEnter}
            boardId={props.board?.id}
            buttonText={props.buttonText}
          placeholderText={props.placeholderText}
          />
        ))
      }
    </div>
  )
}

export default CardContainer