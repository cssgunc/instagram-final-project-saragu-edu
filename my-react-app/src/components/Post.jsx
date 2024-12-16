import "./Post.css"
import Modal from "./Modal";

function Post(props){
    console.log(props);

    
    return(
        <>
        <div className = "post" onClick ={() => props.setIsModalOpen(!props.isModalOpen)}>
            Post
            <p> Likes: {props.likes} Comments: {props.comments} </p>
        </div>
        
        </>
    );
}
export default Post;