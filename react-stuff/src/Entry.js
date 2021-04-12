const Entry = ({msg}) => {
    return(
        <>
        <div className = "subject">
      <input type ="text" placeholder="user" id='user'></input>
      <input type ="text" placeholder="entry#" id='entry'></input>
      <input type ="text" placeholder="topic" id='topic'></input> 
      <input type ="text" placeholder="post" id='post' className = "msg"></input>
        </div>
     
      <h1>{msg}</h1>
        </>
    )
}

export default Entry