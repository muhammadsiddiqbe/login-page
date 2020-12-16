import {useState, useRef} from 'react'


function LoginForm() {
  const userLogin = 'Muhammad'
  const userPassword = '571632'
  const [] = useState(null)

  const takeLoginRef = useRef(null)
  const takePasswordRef = useRef(null)
  const btnRef = useRef(null)

  function formSubmit() {
    if (takeLoginRef.current.value === '' || takePasswordRef.current.value === '') {
      alert('Please fill the field')
      return
    }

    if (takeLoginRef.current.value === userLogin && takePasswordRef.current.value === userPassword) {
      alert('Success')
    } else {
      alert('Wrong password or login')
      return false
    }
    takeLoginRef.current.value = null
    takePasswordRef.current.value = null
  }

  return(
    <div>
      <h3>Sign in</h3>
      <form onSubmit={evt => evt.preventDefault()} className="login-form" action="https:echo.htmlacademy.ru" method="POST">

        <label htmlFor="">
          <input ref={takeLoginRef} className="login-input" type="text" name="userLogin" placeholder={'Login'} minLength={4} required/>
        </label>
        <label htmlFor="">
          <input ref={takePasswordRef} className="password-input" type="password" name="userPassword" placeholder={'Your password'} minLength={6} required/>
        </label>

        <button ref={btnRef} onClick={evt => formSubmit()} type="submit">Submit</button>
      </form>
    </div>

  )
}

export default LoginForm