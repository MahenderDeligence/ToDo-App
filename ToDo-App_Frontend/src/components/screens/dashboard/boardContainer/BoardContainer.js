import React, { useState } from 'react';
import Board from '../board/Board';
import './boardContainer.css';
import Modal from '../modal/Modal';

const BoardContainer = () => {
  const [modalOpen, setModalOpen] = useState(false);
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

    const tempBoards = [...boards];
    tempBoards[0].cards.push(card);
    setBoards(tempBoards)
  };
  
  const handleInputChange = (e) => {

    setValues({
      ...values,
      [e.target.name]: e.target.value
    })

  }
  const [boards, setBoards] = useState([
    {
      id: Date.now() + Math.random() * 2,
      title: "To Do",
      cards: [{
        id: Date.now() + Math.random(),
        title: "h",
        desc: "jkhkjhk",
        date: ""
      }]
    },
    {
      id: Date.now() + Math.random() * 2,
      title: "In Progress",
      cards: [{
        id: Date.now() + Math.random(),
        title: "r",
        desc: "utrewer",
        date: ""
      }]
    },
    {
      id: Date.now() + Math.random() * 2,
      title: "Completed",
      cards: [{
        id: Date.now() + Math.random(),
        title: "p",
        desc: "plmnjiuhb",
        date: ""
      }]
    }
  ]);


  const [target, setTarget] = useState({
    cid: "",
    bid: ""
  });

  const handleDragEnter = (cid, bid) => {
    setTarget({
      cid,
      bid,
    });
  };

  const handleDragEnd = (cid, bid) => {
    let s_bIndex, s_cIndex, t_bIndex, t_cIndex

    s_bIndex = boards.findIndex(item => item.id === bid)
    if (s_bIndex < 0) return;

    s_cIndex = boards[s_bIndex].cards?.findIndex(item => item.id === cid)
    if (s_cIndex < 0) return;

    t_bIndex = boards.findIndex(item => item.id === target.bid)
    if (t_bIndex < 0) return;

    t_cIndex = boards[t_bIndex].cards?.findIndex(item => item.id === target.cid)
    if (t_cIndex < 0) return;

    const tempBoards = [...boards]
    const tempCards = tempBoards[s_bIndex].cards[s_cIndex]

    tempBoards[s_bIndex].cards.splice(s_cIndex, 1)
    tempBoards[t_bIndex].cards.splice(t_cIndex, 0, tempCards);
    setBoards(tempBoards);

  }

  const removeCard = (cid, bid) => {
    const bIndex = boards.findIndex((item) => item.id === bid);
    if (bIndex < 0) return;

    const cIndex = boards[bIndex].cards.findIndex((item) => item.id === cid);
    if (cIndex < 0) return;

    const tempBoards = [...boards]
    tempBoards[bIndex].cards.splice(cIndex, 1);
    setBoards(tempBoards);
  }

  const placeholderText = {
    title: "what needs to be done",
    desc: "description about the task"
  }





  const buttonText = {
    buttonAdd: "Add",
    buttonUpdate: "update"
  }

  return (

    <div className='boardContainer'>
      {
        boards.map((item) => <Board
          key={item.id}
          board={item}
          buttonText={buttonText}
          placeholderText={placeholderText}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          setBoards={setBoards}
          removeCard={removeCard}
          handleDragEnd={handleDragEnd}
          handleDragEnter={handleDragEnter}
        />)
      }
      <div>
        <button className='openModalBtn' onClick={() => { setModalOpen(true) }}>+ Add new</button>
        {modalOpen ?
          <Modal modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            board={boards}
            setBoards={setBoards}
            placeholderTitle={placeholderText.title}
            placeholderDesc={placeholderText.desc}
            buttonAdd={buttonText.buttonAdd}
            values={values}
            setValues={setValues}
            addCard={addCard}
            handleInputChange={handleInputChange}
          />
          : null}
      </div>

    </div>
  )
}

export default BoardContainer