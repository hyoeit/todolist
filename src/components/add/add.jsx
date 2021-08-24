import React, {useState} from 'react'
import styles from './add.module.css'

const Add = () => {
  const [value, setValue] = useState('');

  return (
    <form>
      <input type="text" placeholder="추가 할 일을 입력 하세요" />
      <button type="submit">+
      </button>
    </form>
  )
}

export default Add
