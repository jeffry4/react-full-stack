import UserInst from './UserInst'
const UserData = ({userData})=>{
return(
   userData.map((inst)=>{
           return(<UserInst inst ={inst}/>) 
            
        }) 
)
        
    
       
        
         
    
    
}
export default UserData