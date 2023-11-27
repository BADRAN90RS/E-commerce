

import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Login(props) {
  const { loginFn, password, email, setPassword, setEmail } = props;

  return (
    <div className='container-fluid global'>
      <div className="row">
        <div className="col-md-6 bg-secondary left-section">
         
        </div>

        <div className='col-md-6 bg-light right-section d-flex align-items-center justify-content-center style="min-height:100vh; '>
            
         
          <div className='loginContainer d-flex  flex-column border  w-50 h-25 '>
            <h3>Login</h3>
            <br></br>

            <label for="exampleFormControlInput1" class="form-label"><i className="bi bi-envelope-at-fill m-2"></i>Email </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              id="exampleFormControlInput1" placeholder="name@example.com"
              className='form-control'
            />
            <label><i className="bi bi-person-lock m-2"></i>Password :</label>
            <input
              type='password'
              id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button  type="button" className="btn btn-secondary" onClick={loginFn}>Login</button>
          </div>
        </div>
      </div>
    </div>
   




  );
}




