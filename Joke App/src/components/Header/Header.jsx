import React, { useState } from 'react';
import { Modal } from '../Modal/Modal.jsx';
import { FaGear } from "react-icons/fa6";
import { BiSolidToggleRight } from "react-icons/bi";
import { RiToggleLine } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";
import style from "./Header.module.scss";

export function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false); //sætter modal til false, sålede den er lukket fra start
  const [gearClicked, setGearClicked] = useState(false); 

  const openModal = () => {
    setModalIsOpen(true); //sætter modal til true, således den åbner. 
    setGearClicked(true);
  };

  const closeModal = () => {
    setModalIsOpen(false); // sætter modal til false, således den lukker. 
    setGearClicked(false);
  };
  return (
    <>
    <div className={style.header}>
        <h1>random jokes</h1>
        
        <button onClick={openModal}>
          <FaGear className={`${style.FaGear} ${gearClicked ? style.rotateGear : ''}`} />
        </button> {/* Knap til at åbne modal */}

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} >       {/* opretter et Modal-komponent, som vil være åben, hvis "modalIsOpen" er sandt. */}
        {/* Modalens indhold herunder*/}
        <div className={style.Modal}>
          <button onClick={closeModal}>
          <IoMdCloseCircle  className={style.IoMdCloseCircle} />
          </button>   {/* Knap til at lukke modal */}
          <h2>Indstillinger</h2>
          <div className={style.setttingContainer}>
            <p>Notifikationer</p>
            <BiSolidToggleRight  className={style.IoToggleSharp} />
          </div>
          <div className={style.setttingContainer}>
            <p>Tracking</p>
            <BiSolidToggleRight  className={style.IoToggleSharp} />
          </div> 
          <div className={style.setttingContainer}>
            <p>DarkMode</p>
            <RiToggleLine className={style.IoToggleSharp} />
          </div>
        </div>
      </Modal>
    </div>
    </>
  )
}
