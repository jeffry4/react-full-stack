const UserInst = ({inst})=>{
   return(
        <div className = "entries">
                <h3  className = "topEnt">user#{inst.person_id}| {inst.topic} | entry#{inst.entry_id}</h3> 
                <h4>{inst.post}</h4>
        </div> 
    
    
   
   )
 }
 export default UserInst