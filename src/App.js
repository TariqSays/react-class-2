import React from 'react';
import Tweet from './tweet'
function App(){
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