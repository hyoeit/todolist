import React from 'react'

const List_obejct = ({todo, textDelete}) => {

  const {id, text, ckecked, star} = todo;

  const clicked = e => {
    console.log(e.target.id)
  }

  return (
    <div>
      <p onClick={clicked} id={id}>{text}</p>
      <button id={id} onClick={textDelete}>-</button>
    </div>
  )
}

export default List_obejct
