import React from 'react'
import List_object from '../list_object/list_obejct'
import styles from './list.module.css'

const List = ({ todos, textDelete, onCheck }) => {
  return (
    <div>
      {todos.map( todo => (
        <List_object 
          todo={todo}
          textDelete={textDelete}
          onCheck={onCheck}
        />
      ))}
    </div>
  )
}

export default List
