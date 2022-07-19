function Greet(props){

    const {name, home, styles, children} = props
    return(
        
        <div >
            
            <h2 className={styles}>Hello {name} from {home}</h2>
            {children}
        </div>
    )
}

export default Greet;