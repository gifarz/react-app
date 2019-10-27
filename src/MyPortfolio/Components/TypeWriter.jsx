import React from 'react';

const content =()=>{
    const message =["WELCOME TO MY WORLD","THIS IS MY WEBSITE","I AM AT YOUR SERVICE"];
    let i =0 ;
    let jsxArray = [];
    for(i=0; i<message.length;i++){
      jsxArray.push(
        <div>
          <h1 className="typewriter">
              {message[i]}    
          </h1>
        </div>
       );
    }
    return jsxArray;
}

export default content;