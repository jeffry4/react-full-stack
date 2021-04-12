import React, { Component } from 'react';
import Buttons from './Buttons'
import Entry from './Entry'
import UserData from './UserData'
// import HandleClick from './handleClick';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userData: [],
      msg: null
    };
    this.handleClick = this.handleClick.bind(this)
  }
handleClick(elem){
  const user = document.querySelector('#user')
  const post = document.querySelector('#post')
  const entry = document.querySelector('#entry')
  const topic = document.querySelector('#topic')
  if(elem === 'viewAll'){
    fetch(`http://localhost:8000/api/journal`)
        .then(result=>
              result.json()
        )
               .then(result =>{
                   this.setState({
                      userData : result,
                 })
               }
             )
    }
    if(elem === 'viewSpec'){
      fetch(`http://localhost:8000/api/journal/${entry.value}`)
          .then(result=>
                result.json()
          )
                 .then(result =>{
 
                     this.setState({
                        userData : result,
                   })
                 }
               )
      }
  
  if(elem === "create"){
    fetch(`http://localhost:8000/api/journal`,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              'person_id': user.value, 'topic': `${topic.value}`, 'post': `${post.value}` 
          })
        })
        .then(result=>
          result.text()
    )
           .then(result =>{
               this.setState({
                  msg : result,
             })
           })   
    }
    if(elem === "update"){
      fetch(`http://localhost:8000/api/journal/${entry.value}`,{
            method: 'Put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'person_id': user.value, 'topic': `${topic.value}`, 'post': `${post.value}` 
            })
          })
          .then(result=>
            result.text()
      )
             .then(result =>{
                 this.setState({
                    msg : result,
               })
             }
             )}
    if(elem === "delete"){
              fetch(`http://localhost:8000/api/journal/${entry.value}`,{
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                  })
                  .then(result=>
                    result.text()
              )
                     .then(result =>{
                         this.setState({
                            msg : result,
                       })
                     })   
              }
}
  
  render(){
    return(
      <div>
        {/* <header class = 'header'> */}
         <Buttons 
         arr = {['viewAll','create','viewSpec','update','delete']}
         handleClick = {this.handleClick}
        //  state = {this.state.user}
         />
        {/* </header> */}
        < Entry msg = {this.state.msg}/>
        <UserData 
        userData = {this.state.userData}
        />
      </div>
    )
  }
}

export default App;