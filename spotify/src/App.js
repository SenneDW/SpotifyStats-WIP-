import React, { useEffect, useState } from 'react'
import './styles/app.css';
import './styles/index.css'
import backgroundVideo from './videos/video.mp4'
import spotifyLogo from './images/Spotify.png'
import { scopes } from './scopes/scopes';

export const App = () => {

  useEffect(() => {

    /*fetch("http://localhost:8080/api/user/login").then((res) => {
      res.json()
    }).then((data) => {
      console.log(data);
    })*/
  }, []);



  return (
    <div className="app">
      <video className='backgroundVideo' autoPlay muted loop >
        <source src={backgroundVideo} type='video/mp4' />
      </video>
      <div className='landingpageText'>
        <h1 className='landingpageTitle'>Explore your Spotify stats - Sign in for music magic!</h1>
<<<<<<< HEAD
        <button className='landingpageButton' onClick={() => window.location.href = `https://accounts.spotify.com/authorize?client_id=xxxxx&response_type=code&redirect_uri=http://localhost:3000/account&scope=${scopes}&show_dialog=true`} >Sign in with Spotify <img className='buttonImage' src={spotifyLogo}></img> </button>
=======
        <button className='landingpageButton' onClick={() => window.location.href = "https://accounts.spotify.com/authorize?client_id=xxxxxxx&response_type=code&redirect_uri=http://localhost:3000/account&scope=user-top-read%20user-read-private&show_dialog=true"} >Sign in with Spotify <img className='buttonImage' src={spotifyLogo}></img> </button>
>>>>>>> 775d83c5f12d3ead494e8fdb1f5613947ec93e57
      </div>
    </div>
  );
}

export default App
