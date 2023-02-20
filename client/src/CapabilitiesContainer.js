import Capability from "./Capability";
import React, {useState, useEffect } from "react";
import Filter from "./Filter";

function CapabilitiesContainer({ capabilities }) {

    const [filteredData, setFilteredData] = useState('')
    if (!Array.isArray(capabilities)) return <div>Loading...</div>;
    const filteredCapabilities = capabilities.filter(capability => {
        // console.log(capabilities)
        if(capability.name){
        return capability.name.includes(filteredData.toLowerCase())
        }
    })

    const mapCapabilities = filteredCapabilities.map((capability) => {
        return <Capability key={capability.id} capability={capability} />
    })

    //run another filter here that filters the jason for function.user 
    //save the filtered result as a variable
     //here we do a route check. 
    //route check checks that our url is http://localhost:4000/manage
    //save the route check as a variable that our ternary is based off of

    // const [manageFilteredData, setManageFilteredData] = useState('')
    // const manageFilteredCapabilities = capabilities.filter(capability => {
    //     return capability.name.includes(manageFilteredData.toLowerCase())
    // })

    // const manageMapCapabilities = manageFilteredCapabilities.map((capability) => {
    //     return <Capability key={capability.id} capability={capability} />
    // })

    return (
        <>
    <Filter filteredData={filteredData} setFilteredData={setFilteredData} />
    <div className="capabilities-container">
    <div>
        {mapCapabilities}
    </div> 
    {/* <Filter manageFilteredData={manageFilteredData} setManageFilteredData={setManageFilteredData} />
    <ul>
        {manageMapCapabilities}
    </ul>  */}
    </div>
    </>
    )
}

export default CapabilitiesContainer;