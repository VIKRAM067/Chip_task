import React from "react";
import './App.css';


const Hero = ()=>{

    const heroTitle = "Chip Usage: Autocomplete";
     return(
        <div className="flex justify-center items-center Hero">
            <h2 className="font-bold text-gray-600 ">{heroTitle}</h2>
        </div>
    );
};

export default Hero