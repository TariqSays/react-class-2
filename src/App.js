import React from 'react';
import Tweet from './tweet'
function App(){
  const SayHello = () =>{
    //console.log('I Just Fell in Love with REACT');
    alert('I just fell in love with REACT')
  }

 return(

   <div className='ap'>
     <button className='SayHello'>React</button>
     <Tweet name="Arslan" /> 
     <Tweet name="Abrar" /> 
     <Tweet name="Usman" /> 
     <Tweet name="Tariq" />  
   </div>
 );
}

export default App;