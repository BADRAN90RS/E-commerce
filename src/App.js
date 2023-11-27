
import { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from './utils/firebaseConfig';


function App() {


  const[user,setUser] = useState("");
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

const loginFn = () => {
  signInWithEmailAndPassword(auth,email,password)
  .catch((err)=>{
    console.log(err)
  })
}


const logout = () => {
  auth.signOut();
}

const authListner = () => {
  auth.onAuthStateChanged((user) =>{
    if(user){
      setUser(user)
    }
    else{
      setUser("");
    }
  })
}
useEffect(()=>{authListner()},[])


  return (
    <div className="App">
      {
        user ?
         <Dashboard logout={logout}/> :
          <Login
          loginFn={loginFn}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          />
      }
    
     
    </div>
  );
}

export default App;
