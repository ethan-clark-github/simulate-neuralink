import React from "react";
import { useState } from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

function Login({ onLogin, logInPls }) {  
    const [showLogin, setShowLogin] = useState(true);

    return(

        <div className="login-form">    
        <div>              
            {showLogin ? (        
            <>          
            <LoginForm logInPls={logInPls} onLogin={onLogin} />          
            <div />          
            <p className="accountquestion">            
            Don't have an account?</p> &nbsp;            
            <button onClick={() => setShowLogin(false)}>              
            Sign Up            
            </button>         
            </>      
            ) : (        
            <>          
            <SignUpForm onLogin={onLogin} />          
            <div />          
            <p className="accountquestion">            
            Already have an account?</p> &nbsp;            
            <button onClick={() => setShowLogin(true)}>             
            Log In            
            </button>        
            </>      
            )}    
            </div>    
            </div>  
            );

}

export default Login