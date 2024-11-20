import { useState } from "react";

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email:'',
    password:''
  })

  function handleInputChange(name,event){
    setEnteredValue((prev)=>({
      ...prev,
      [name]: event,
    }))
  }
  function handleSubmited(event){
    console.log("submitted Login form");
    event.preventDefault()
  }
  return (
    <form onSubmit={handleSubmited}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(event)=>handleInputChange('email',event.target.value)} value={enteredValue.email}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event)=>handleInputChange('password',event.target.value)} value={enteredValue.password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
