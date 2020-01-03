import React, { useState } from 'react'
// import styles from './AuthPage.module.css'

export const AuthPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  return (
    <div className='row'>
      <div className='col s6 offset-s3'>
        <h1>Short Links</h1>
        <div className='card grey lighten-5'>
          <div className='card-content black-text'>
            <span className='card-title'>Авторизация</span>
            <div className='input-field'>
              <input
                // placeholder='Введите email'
                id='email'
                type='email'
                className='validate'
                name='email'
                onChange={changeHandler}
              />
              <label htmlFor='email'>Email</label>
            </div>
            <div className='input-field'>
              <input
                // placeholder='Введите password'
                id='password'
                type='password'
                className='validate'
                name='password'
                onChange={changeHandler}
              />
              <label htmlFor='password'>Password</label>
            </div>
          </div>
          <div className='card-action'>
            {/* <button className={'btn yellow darken-4 ' + styles.mr10}> */}
            <button className='btn grey lighten-5 black-text'>Войти</button>
            <button className='btn grey lighten-5 black-text'>
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
