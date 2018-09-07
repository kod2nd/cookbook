import React, { Component } from 'react';

class IFrame extends Component {
    render() {
        try {
           return (
                   <iframe 
                   title="recipe-test"
                   className="iframe"
                   src="http://www.closetcooking.com/2009/11/pumpkin-pie-french-toast.html" frameBorder="0" onError={(error)=>console.log("hello",error)}></iframe>
           );
       } catch (error) {
           return console.log(error)
       }
    }
}

export default IFrame;




