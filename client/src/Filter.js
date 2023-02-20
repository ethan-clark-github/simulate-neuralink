import React from "react";

function Filter({ setFilteredData }) {
    function handleChange(e) {
        console.log(setFilteredData)
        setFilteredData(e.target.value)

    }
    return (
        <div className="filter">
            <input type="text" className="searchTerm" onChange={handleChange} placeholder="Search by name" />
        </div>
    );
}

export default Filter;