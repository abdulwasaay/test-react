const ButtonLatest = ({title , classes} : {title:any , classes?:string}) => {
    return(
        <button className={`${classes}`}>
            {title}
        </button>
    )
}

export default ButtonLatest