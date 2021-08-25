import React from 'react'
import styles from './list_object.module.css'


const List_object = ({todo, textDelete}) => {

  const {id, text, ckecked, star} = todo;


  return (
    <div>
      <p onClick={textDelete} >{text}</p>
      <button onClick={()=>textDelete(id)}>-</button>
    </div>
  )
}

export default List_object
