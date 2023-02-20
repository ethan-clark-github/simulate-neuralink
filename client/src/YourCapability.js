import React, { useState,useEffect } from "react";

function YourCapability({ capability }) {


    const [details, toggleDetails] = useState(true)

    const [inputName, setInputName] = useState("")
    const [outputName, setOutputName] = useState("")
    const { name, category, input_id, output_id } = capability

    useEffect(() => {
    fetch(`inputs/${capability.input_id}`)
                    .then(response => response.json())
                    .then(post => {
                        setInputName(post.name)
                    })
                }, [capability.input_id])

    useEffect(() => {
    fetch(`outputs/${capability.output_id}`)
        .then(response => response.json())
        .then(post => {
                setOutputName(post.name)
                })
        }, [capability.output_id])

    function handleDelete(){
        fetch(`functions/${capability.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
    }
        })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // update the state to remove the deleted item
    // setState(prevState => {
    //     return ( { functions: prevState.functions.filter((function) => function.id !== capability.id) } );

    //   });
  })
  .catch(error => console.log(error))
}
    
    

    return (

            <div className="capability">
                <div className="line"></div>
                <div className="box">
                    <p><strong>input</strong></p>
                    <p>{
                        inputName
                    }</p>
                </div>
                <div className="triangle"></div>
                <div className="box">
                    <p><strong>category</strong></p>
                    <p>{category}</p>
                    <p><strong>function</strong></p>
                    <p>{name}</p>
                </div>
                <div className="triangle"></div>
                <div className="box">
                    <p><strong>output</strong></p>
                    <p>{outputName}</p>
                </div>
                <button>edit</button>
                <button onClick={() => handleDelete()}>delete</button>
            </div>
    );
}

export default YourCapability;