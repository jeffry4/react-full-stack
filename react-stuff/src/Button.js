const Button = ({elem, handleClick, }) => {

    return(

        <button className = 'button' onClick={()=> handleClick(elem)}> {elem} </button>
    )
}





export default Button