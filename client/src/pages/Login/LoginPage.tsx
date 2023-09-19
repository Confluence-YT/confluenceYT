import React from 'react'
import "./loginPage.css"
import googleLogo from "./../../assets/google.png" 
function LoginPage() {
    const googleAuth = ()=> {
        console.log(import.meta.env.VITE_API_URL);
        
        window.open(
          `${import.meta.env.VITE_API_URL}/auth/google/callback`,"_self"
        );
      }
  return (
    <div className="auth-card">
        <div className="logo-space">
          <img src="/confluenceYT_black.svg" alt="confluenceYT-logo" />
          <ul>
            <li>Easy to use</li>
            <li>Self-hostable on any cloud platform</li>
            <li>Discord notifications for YouTubers</li>
            <li>Direct upload to YouTube from the server</li>
          </ul>
          <button className="google-auth-btn" onClick={googleAuth}>
            <img src={googleLogo} alt="" />
            Log in/Sign Up with google
          </button>
        </div>
      </div>
  )
}

export default LoginPage