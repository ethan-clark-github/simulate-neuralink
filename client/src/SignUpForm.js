import { useState, useEffect } from "react";

function SignUpForm({ onLogin }) {  
    const [username, setUsername] = useState("");  
    const [password, setPassword] = useState("");  
    const [errors, setErrors] = useState([]);  
    const [isLoading, setIsLoading] = useState(false);
  function handleSubmit(e) {    
    e.preventDefault();    
    setErrors([]);    
    setIsLoading(true);    
    fetch("/signup", {      
        method: "POST",      
        headers: {        
            "Content-Type": "application/json",      
        },      
        body: JSON.stringify({        
            username,        
            password      
        }),    
    }).then((r) => {      
        setIsLoading(false);      
        if (r.ok) {        
            r.json().then((user) => onLogin(user));      
        } else {        
            r.json().then((err) => setErrors(err.errors));      
        }    
    });  
}
  return (    
  <form onSubmit={handleSubmit}>      
  <div>        
    <label htmlFor="username">Username</label>        
    <input          
    type="text"          
    id="username"          
    autoComplete="off"          
    value={username}          
    onChange={(e) => setUsername(e.target.value)}        
    />      
    </div>      
    <div>        
        <label htmlFor="password">Password</label>        
        <input          
        type="password"          
        id="password"          
        value={password}          
        onChange={(e) => setPassword(e.target.value)}          
        autoComplete="current-password"        
        />      
        </div>      
        {/* <div>        
            <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>      
            </div>      
            <div>        
                {errors.map((err) => (          
                <error key={err}>{err}</error>        
                ))}      
                </div>     */}
                <div>
  <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
</div>
{errors && (
  <div>
    {errors.map((err) => (
      <error key={err}>{err}</error>
    ))}
  </div>
)}

                </form>  
                );
}

export default SignUpForm