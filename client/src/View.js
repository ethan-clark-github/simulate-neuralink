import CapabilitiesContainer from "./CapabilitiesContainer";
import React, { useState } from "react";

function View({ capabilities }) {
    
    return (
    <>
    <CapabilitiesContainer capabilities={capabilities}/>
    </>
    )
}

export default View;