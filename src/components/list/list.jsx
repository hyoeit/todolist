import React from 'react'
import List_obejct from '../list_object/list_obejct'
import styles from './list.module.css'

const List = ({ todos, textDelete }) => {
  return (
    <div>
      {Object.keys(todos).map(key => (
        <List_obejct 
          key={key}
          todo={todos[key]}
          textDelete={textDelete}
        />
      ))}
    </div>
  )
}

export default List
