function Structure(props)
{
    return(
        <div className="show-detail">
            <p>Name : {props.name}.</p>
            <p>Email : {props.email}.</p>
            <p>Phone Number : {props.p_no}</p>
            <p>Whatsapp Number : {props.w_no}.</p>
        </div>
    );
}

export default Structure;