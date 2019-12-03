import React from 'react' ;
import faker from "faker";
const UserDetails = (props) =>{

    console.log(props);
    return(
        <div >

            

            <div>
                 <img alt-text="shyam" src={faker.image.avatar()} className="rounded-circle" />  
             </div>
                
                    

                <div>
                    <h5>Name : {props.name}</h5>
                 </div>
                 <div>
                     <h5>Profile : I am {props.role}</h5>
                 </div>

                 <div>
                          <button type="button" class="btn btn-outline-primary">ReadMore</button>
                          <button type="button" class="btn btn-outline-danger">ViewMore</button>
                </div>


        </div>   



    )
};

export default UserDetails;