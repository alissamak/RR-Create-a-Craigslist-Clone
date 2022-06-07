const Posting = (props) => {
    return(
        <div className="posting">
            <h1>{props.posting.title}</h1>
            <h3>{props.posting.price}</h3>
            <p>{props.posting.description}</p>
            <img src={props.posting.imageURL} alt={props.posting.title}></img>
        </div>
    )
}
export default Posting;