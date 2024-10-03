import axios from "axios";
import React from"react";

const DeletePerson =()=>{
    

    return(
        constoutput =axios.get("localhost:5000/persons")
        console.log (output)
        <h1> {$output}
        </h1>
    )
};

export default DeletePerson;