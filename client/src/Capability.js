import React, { useState,useEffect } from "react";

function Capability({ capability }) {


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


    return (

            <div className="capability">
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
                <div className="line">

                </div>
            </div>
    );
}

export default Capability;