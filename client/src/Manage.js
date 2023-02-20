import YourCapabilitiesContainer from "./YourCapabilitiesContainer";
import React, { useEffect, useState } from "react";

function Manage({  user }) {
    const [userCapabilities, setUserCapabilities] = useState([])
    useEffect(() => {
        fetch("/me")
        .then( r => r.json())
        .then(data => {
            data && setUserCapabilities(data.functions)
        })
    }, [user])
    
    return (
        <>
        <YourCapabilitiesContainer userCapabilities={userCapabilities}/>
        </>
    )
}

export default Manage;