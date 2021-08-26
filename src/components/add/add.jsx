import React, {useState, useRef} from 'react'
import styles from './add.module.css'
import { IoIosAddCircleOutline } from "react-icons/io";

const Add = ({textAdd}) => {
  const [value, setValue] = useState('');
  const addRef = useRef();
  const formRef =useRef();

  const onClick = event => {
    event.preventDefault();
    const todo = {
      id: Date.now(),
      text: addRef.current.value,
      checked: true,
      start: false,
    }
    textAdd(todo)
    formRef.current.reset();
  }

  return (
    <form ref={formRef}>
      <input ref={addRef} type="text" placeholder="추가 할 일을 입력 하세요" />
      <button type="submit" onClick={onClick} ><IoIosAddCircleOutline />
      </button>
    </form>
  )
}

export default Add
