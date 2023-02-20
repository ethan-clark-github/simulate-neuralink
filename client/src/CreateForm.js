import React, { useState, useEffect } from "react";
import InputsDropdown from "./InputsDropdown";
import OutputsDropdown from "./OutputsDropdown";



function CreateForm({ handleAddCapability }) {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [input_id, setInputId] = useState(0)
    const [output_id, setOutputId] = useState(0)

    //test 
    const [inputs, setInputs] = useState([])
    console.log(inputs)

    useEffect(() => {
      fetch('/inputs')
          .then(res => res.json())
          .then((data) => setInputs(data));
    }, [])
    //test

    //test 
    const [outputs, setOutputs] = useState([])
    console.log(outputs)

    useEffect(() => {
      fetch('/outputs')
          .then(res => res.json())
          .then((data) => setOutputs(data));
    }, [])
    //test


    function handleSubmit(e) {
        e.preventDefault()

        const newCapability = {
            name,
            category,
            input_id,
            output_id
        }
        
        handleAddCapability(newCapability)
        alert("submitted")
    }

    return (
        <div className="create-form">
            <form className="create-form" onSubmit={handleSubmit}>
                <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                </div>
                <div>
                <input
                    onChange={(e) => setCategory(e.target.value)}
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={category}
                />
                </div>
                {/* <input
                    onChange={(e) => setInputId(e.target.value)}
                    type="text"
                    name="input id"
                    placeholder="Input ID"
                    value={input_id}
                />
                <input
                    onChange={(e) => setOutputId(e.target.value)}
                    type="text"
                    name="output id"
                    placeholder="Output ID"
                    value={output_id}
                /> */}
                {/* <InputsDropdown onChange={(e) => setInputId(e.target.value)} value={input_id}/> */}
                <label><strong>Select an input:</strong></label>
      <select 
        // value={selectedOption}
        value={input_id}
        onChange={e => setInputId(parseInt(e.target.value))}
      >
        { inputs.length > 0 && inputs.map(option => {
            console.log(option.id)
          return <option key={option.id} value={option.id}>
            {option.name}
          </option>
})}
      </select>
                {/* <OutputsDropdown onChange={(e) => setOutputId(e.target.value)} value={output_id}/> */}
                <label><strong>Select an input:</strong></label>
                <select 
        // value={selectedOption}
        value={output_id}
        onChange={e => setOutputId(parseInt(e.target.value))}
      >
        { outputs.length > 0 && outputs.map(option => {
            console.log(option.id)
          return <option key={option.id} value={option.id}>
            {option.name}
          </option>
})}
      </select>
                
                <button type="submit">Add Capability</button>
            </form>
        </div>
    );
}

export default CreateForm;