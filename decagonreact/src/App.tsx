import React, { ChangeEvent, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import LandingPage from './LandingPage';

function App(param: any) {
  
  const [countries, setCountries] = useState([]);
  const [expiredToken, setExpiredToken] = useState(Boolean); 

  const fetchCountries = (event: ChangeEvent) => {
     let countryName = event.target as HTMLInputElement;

     if(countryName.value == "")
        return;
     console.log(param)
     axios({
      method: "GET",
      url: "http://localhost:7000/search/country?name=" + countryName.value,
      headers: { "Content-Type": "application/json", "authorization": "Bearer " + param.authToken }
      }).then((response: any)=>{
        
        if(response.data == "Your Token has expired, please get a new token")
            setExpiredToken(true);

        setCountries(response.data)
        // console.log(response.data)

      }).catch(err=>{ 
           console.log(err);
      })
  }

  const displayCountries = () => {
       let result = countries.map(element => {
           return (<div className="countries">
           <p><span>{"Country:"}</span> </p>
           <p><span>Region: </span> North America</p>
           <p><span>Calling codes</span></p>
           <ul>
             <li>444</li>
             <li>222</li>
             <li>333</li>
           </ul>
        </div>);
       });

       return result;
  }

  const showAppPage = () => {
      return (
               <div className="App">

                   <div className="containerForLabel"><label> Country Search</label></div>
                   <input placeholder="Type a country name here" className="search" onChange={event => fetchCountries(event)}></input>

                   <div className="countryListing">
                   {displayCountries()}
                   </div>    

                </div>
      )
  }

  const toggleBtwLoginOrLandingPage = () => {

    if(expiredToken) return <LandingPage />

    return showAppPage();
  }

  useEffect(() => {
    console.log("Do nothing");
  }, [countries]);

  return (
     toggleBtwLoginOrLandingPage()
  );
}

export default App;
