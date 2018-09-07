import React, { Component } from 'react';

const tryCatch = () =>{
    try {
        console.log(window.error)
        console.log(window.self !== window.top)
        return window.self === window.top;
    } catch (e) {
        console.log("here", e)
        return true;
    }}

class IFrame extends Component {
    render() {
        try {
           return (
                   <iframe 
                   title="recipe-test"
                   className="iframe"
                   src="http://www.closetcooking.com/2009/11/pumpkin-pie-french-toast.html" frameBorder="0" onLoad={()=>tryCatch()}></iframe>
           );
       } catch (error) {
           return console.log(error)
       }
    }
}

export default IFrame;




