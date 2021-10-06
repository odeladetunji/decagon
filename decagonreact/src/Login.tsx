import React, { ChangeEvent, FormEvent, useState } from 'react';
import './App.css';
import App from './App';

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAppRoute, setIsApproute] = useState(Boolean);

  const navigateToSearchPage = (event: FormEvent) => {
      event.preventDefault();
      console.log(username);
      console.log(password)
       if(username != "" && password != "")
           setIsApproute(true);
  }

  const usernameChangeEvent = (event: ChangeEvent) => {
    let username = event.target as HTMLInputElement;
    setUsername(username.value);
  }

  const passwordChangeEvent = (event: ChangeEvent) => {
       let password = event.target as HTMLInputElement;
       setPassword(password.value)
  }

  const displayLoginOrSearchPage = () => {
      if(isAppRoute)
          return <App />

       return (<div className="Login">
          <form onSubmit={(event) => navigateToSearchPage(event)}>
              <input placeholder="username" className="login" type="email" 
                       required onChange={event => usernameChangeEvent(event)}></input>
 
              <input placeholder="password" className="login" type="password" 
                       required onChange={event => passwordChangeEvent(event)}></input>
 
              <button>open the door please</button>
          </form>
     </div>)

  }

  return (
     <div>
         {displayLoginOrSearchPage()}
     </div>
  );

}

export default Login;

