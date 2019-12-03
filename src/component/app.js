import React from "react";
import UserDetails from './UserDetails';
const  App =() => {

    let style = {
        padding :"80px 0px 80px",
        color : "green"
        
        
    };
 return(
     <div className = "container"  style={style}>
        
        <div className="row">

        <UserDetails  name="Shyam"   role="Tester"/ > 
        <hr/>

        <UserDetails   name="Tushar" role="Devloper"/>
        <hr/>

        <UserDetails  name="Parag" role="Blogger"/>
        </div>
    
     </div>
 )

};

export default App;