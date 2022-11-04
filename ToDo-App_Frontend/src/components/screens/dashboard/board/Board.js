import React from 'react';
import './board.css';
// import Close from '@mui/icons-material/Close';
import CardContainer from '../cardContainer/CardContainer';

const Board = (props) => {
  return (   
    <div className='board'>
      <div className='boardTitleSec'>
        <p className='boardTitle'>
          {props.board?.title}
        </p> 
        <span>{`${props.board?.cards?.length}`}</span>
        {/* <Close id='closeIcon' /> */}
      </div>
      <div className='cardSection'>
        <CardContainer
          board={props.board}
          modalOpen={props.modalOpen}
          setModalOpen={props.setModalOpen} 
          setBoards={props.setBoards}
          removeCard={props.removeCard}
          handleDragEnd={props.handleDragEnd}
          handleDragEnter={props.handleDragEnter}
          boardId={props.board?.id}
          buttonText={props.buttonText}
          placeholderText={props.placeholderText}
        />
      </div>
    </div>
  )
}

export default Board