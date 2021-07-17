


const AlertBox =({title,type})=>{
    let processed="alert "+type;
    return(
    <div className="card">
        <h1>{title}</h1>
    <div className={processed}>
        This is aler box
    </div>
    </div>
    )
}

export default AlertBox;