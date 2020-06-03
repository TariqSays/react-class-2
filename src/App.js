import React from 'react';
function App(){
  const SayHello = () =>{
    //console.log('I Just Fell in Love with REACT');
    alert('I just fell in love with REACT')
  }

 return(
   <div>
     <h1>Hello React</h1>
     <button onClick={SayHello}>Annoucement</button>
   </div>
 );
}

export default App;