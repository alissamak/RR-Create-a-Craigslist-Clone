import Posting from "./posting";

const Gallery = (props) => {
    return(
        <div className="gallery">
            <h1>Gallery</h1>
            {props.postings.map((p,i) => {
                return <Posting posting={p} key={i}/>
            })}
        </div>
    )
}
export default Gallery;