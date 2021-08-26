import React from 'react'
import styles from './list_object.module.css'
import { IoIosCloseCircleOutline, IoIosStarOutline, IoIosCheckboxOutline  } from "react-icons/io";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
} from "react-icons/md";


const List_object = ({todo, textDelete, onCheck}) => {

  const {id, text, checked, star} = todo;

  const onClick = e => {
    console.log(e.target.checked)
  }

  return (
    <div className={styles.list}>
      <button className={styles.check} >
        {checked === true ? <MdCheckBoxOutlineBlank /> : <MdCheckBox /> } 
      </button>
      <p className={styles.text} onClick={textDelete} >{text}</p>
      <button className={styles.star} ><IoIosStarOutline /></button>
      <button className={styles.plus} onClick={()=>textDelete(id)}><IoIosCloseCircleOutline /></button>
    </div>
  )
}

export default List_object
