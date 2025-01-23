import React from "react";
import "./Spiner.css";


const Spiner = () =>{
    return(
        <div className="flex flex-col justify-center items-center space-y-2">
            <div className="spinner"></div>
            <p className="text-bgDark font-semibold text-lg">Loading...</p>
        </div>
    )
};

export default Spiner;