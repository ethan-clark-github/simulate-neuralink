import { useState, useEffect } from "react";

function LoginForm({ onLogin, logInPls}) {  
    const [username, setUsername] = useState("");  
    const [password, setPassword] = useState("");  
    const [errors, setErrors] = useState([]);  
    const [isLoading, setIsLoading] = useState(false);
  function handleSubmit(e) {    
    e.preventDefault();    
    setIsLoading(true);    
    fetch("/login", {      
        method: "POST",      
        headers: {        
            "Content-Type": "application/json",      
        },      
        body: JSON.stringify({ username, password }),    
    })      
    .then((r) => {        
        setIsLoading(false);      
        if (r.ok) {        
            r.json().then((user) => logInPls(user));      
        } else {        
            r.json().then((err) => setErrors(err.errors));      
        }      
    });  
}
  return (    
  <form onSubmit={handleSubmit}>    
  <form>        
    <label htmlFor="username">Username</label>        
    <input          
    type="text"          
    id="username"          
    autoComplete="off"          
    value={username}          
    onChange={(e) => setUsername(e.target.value)}        
    />      
    </form>      
    <form>        
        <label htmlFor="password">Password</label>        
        <input          
        type="password"          
        id="password"          
        autoComplete="current-password"          
        value={password}          
        onChange={(e) => setPassword(e.target.value)}        
        />      
        </form>              
        <button variant="fill" color="primary" type="submit">          
        {isLoading ? "Loading..." : "Login"}        
        </button>            
          
            </form>  
            );
}

export default LoginForm