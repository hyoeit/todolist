import React from 'react'
import styles from './login.module.css'

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService.login(event.currentTarget.textContent)
    
  }
  return (
    <section>
      <section>
        <h1>Login</h1>
        <ul>
          <li>
            <button onClick={onLogin}>Google</button>
          </li>
          <li>
            <button onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
    </section>
  )
}

export default Login
