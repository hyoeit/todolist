import React from 'react'
import styles from './header.module.css'

const Header = () => {
  
  const date = new Date();
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth();
  const monthNames = ["JAN", "FAB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const monthName = monthNames[month]
  console.log(month)
 

  return (
  <section className={styles.container}> 
    <section>
      <p>{year}</p>
      <p>{day}</p>
      <p>{monthName}</p>
    </section>
    <div>
      <h1>To do list</h1>
    </div>
  </section>  
  )
}

export default Header
