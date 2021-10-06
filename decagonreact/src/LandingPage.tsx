import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './App.css';
import App from './App';
import axios from 'axios';

function LandingPage() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAppRoute, setIsApproute] = useState(Boolean);
  const [authToken, setAuthToken] = useState("")
  
  const navigateToSearchPage = (event: FormEvent) => {
    event.preventDefault();
    console.log(username);
    console.log(password)

     if(username != "" && password != ""){
        axios({
            method: "GET",
            url: "http://localhost:7000/fetchToken",
            headers: {"Content-Type": "application/json"}
            }).then((response: any)=>{
                setAuthToken(response.data)
              console.log(response.data)
            }).catch(err=>{ 
                 console.log(err);
            })

         setIsApproute(true);
     }
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
        return <App authToken={authToken}/>

     return (<div className="Login">
        <form onSubmit={(event) => navigateToSearchPage(event)}>
            <p className="getAccessToken">Get New Access Token</p>
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

export default LandingPage;
