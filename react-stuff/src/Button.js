const Button = ({elem, handleClick, state}) => {

    return(

        <button className = 'button' onClick={()=> handleClick(elem,state)}> {elem} </button>
    )
}





export default Button