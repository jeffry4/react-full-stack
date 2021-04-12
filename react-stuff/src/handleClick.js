// import { query } from "express";

const HandleClick = (elem,state)=>{
    const user = document.querySelector('#user')
    const post = document.querySelector('#post')
    if(elem === 'viewAll'){
      
      fetch(`http://localhost:8000/api/journal`)
          .then(async function (result){
              let apiObject = await result.json();
              console.log(apiObject)
            //   for (let i = 0; i < apiObject.length; i++){
                  console.log(this)
                 await this.setState({
                     post: apiObject.post,
                    topics: apiObject.topic
                 }
                )
               
             // }
          })
      }
    

    if(elem === "create"){
      console.log(post.value)
      fetch(`http://localhost:8000/api/journal`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'person_id': user.value, 'topic': `${state.topic}`, 'post': `${post.value}` 
            })
          })
                // .then(async(result)=>{
                //     let text = await result.text();
                //     console.log(text)
                //     // this.setState(
                //     //   post = text
                     
                //     // )
                // })
      }
  }

  export default HandleClick