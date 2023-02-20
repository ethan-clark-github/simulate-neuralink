import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, {useState, useEffect } from "react";
import Login from './Login.js'
import LoginForm from './LoginForm';
import Nav from "./Nav";
import View from "./View";
import Create from "./Create";
import Manage from "./Manage";
import YourCapabilitiesContainer from "./YourCapabilitiesContainer";

function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => {      
  //   fetch("/me").then((response) => {        
  //     if (response.ok) {          
  //       response.json().then((user) => setUser(user));        
  //     }      
  //   });    
  // }, []);
  useEffect(() => {
    // Check if the user is already logged in
    fetch("/me")
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setUser(data);
        }
      });
  }, []);

  function handleLogin(username, password) {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setUser(data);
        }
      });
  }

  // function handleLogout() {
  //   fetch("/logout", { method: "DELETE" }).then((r) => {
  //       if (r.ok) {
  //           setUser(null);
  //       }
  //   });
  //   }
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      setUser(null);
    });
  }

function logInPls(user){
  setUser(user)
}
//testing
const [capabilities, setCapabilities] = useState([])

useEffect(() => {
  fetch('/functions')
      .then(res => res.json())
      .then((data) => setCapabilities(data));
}, [])
// useEffect(() => {
//   fetch('/functions')
//       .then(res => res.json())
//       .then((data) => {
//         if(Array.isArray(data)){
//             setCapabilities(data);
//         }
//       });
// }, [])

function handleAddCapability(newCapability) {
 
  const newObj = {...newCapability, user_id: user.id}
  console.log(newObj)
  fetch("/functions", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
  })
      .then((res) => res.json())
      .then((data) => setCapabilities([...capabilities, data]));
};
console.log(setCapabilities)
console.log(user, "hey")

  return (
    <>
  <Router>
    <Nav />
    <div className="log">
      <header >
    { !user ? <Login  logInPls={logInPls}onLogin={setUser} /> : <button onClick={handleLogout} >logout</button>}
    </header>
    </div>
    <div>
      <Routes>
        <Route path="/" className="link" element={<View capabilities={capabilities}/>} />
        <Route path="/create" className="link" element={<Create  handleAddCapability={handleAddCapability}/>} />
        <Route path="/manage" className="link" element={<Manage capabilities={capabilities} user={user}/>}/>
      </Routes>
    </div>
    </Router>
    //////
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
          <YourCapabilitiesContainer userCapabilities={user.functions} user={user} />
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
    </>
)
}
// return (
//   <Router>
//     <Nav />
//     <div className="log">
//       <header>
//         {user ? (
//           <button onClick={handleLogout}>logout</button>
//         ) : (
//           <Login onLogin={setUser} />
//         )}
//       </header>
//     </div>
//     <div>
//       <Routes>
//         {user ? (
//           <Route
//             path="/"
//             className="link"
//             element={<View capabilities={capabilities} />}
//           />
//         ) : (
//           <Route path="/" className="link" element={<LoginForm />} />
//         )}
//         {user ? (
//           <Route
//             path="/create"
//             className="link"
//             element={<Create handleAddCapability={handleAddCapability} />}
//           />
//         ) : null}
//         {user ? (
//           <Route
//             path="/manage"
//             className="link"
//             element={<Manage capabilities={capabilities} user={user} />}
//           />
//         ) : null}
//       </Routes>
//     </div>
//   </Router>
// );
// }


export default App