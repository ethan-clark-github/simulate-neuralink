import CreateForm from "./CreateForm";
import React, { useState } from "react";

function Create({ handleAddCapability }) {
    return (
    <>
    <CreateForm handleAddCapability={ handleAddCapability } />
    </>
    )
}

export default Create;