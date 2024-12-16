import Sidebar from './components/Sidebar';
import Post from './components/Post';
import { useState } from 'react';
import Modal from './components/Modal';
import './App.css';


function App(){

  
  const postInfo = [
    {likes: 200, comments: 30}, 
    {likes: 100, comments: 20}, 
    {likes: 500, comments: 20}, 
    {likes: 1000, comments: 900}];
  

  function printString(myString){
    console.log(myString);
  }
  

  const[hasUserLiked, setHasUserLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  function renderModal(){
    if (isModalOpen) {
      return(
        <><Modal /></>
      );
    }
  }

  function renderPost(postInfo){
    return (<> 
    <Post 
      likes = {postInfo.likes}
      comments = {postInfo.comments}
      isModalOpen ={isModalOpen}
      setIsModalOpen = {setIsModalOpen}
      />
    </>
    )
  }

  const apiKey = import.meta.env.VITE_SUPABASE_API_KEY;
  const dbURL = import.meta.env.VITE_SUPABASE_URL;

  
  

  async function createUser() {
    const userHandle = document.getElementById("user-handle").value
    const firstName = document.getElementById("first-name").value
    const lastName = document.getElementById("last-name").value
    const password = document.getElementById("password").value
  
    const userData = {"user-handle": userHandle, "first-name": firstName, "last-name": lastName, "password": password};
    const { error } = await supabase.from("profiles").insert(userData);
  }
  
  console.log(hasUserLiked);
  return(
    <>
      User Handle:
      <input id = "user-handle"></input>
      First Name:
      <input id = "first-name"></input>
      Last Name:
      <input id = "last-name"></input>
      Password:
      <input id = "password"></input>
      <button onClicke ={() => createUser()}> Create Account </button>

      <Sidebar />
      {renderModal()}

      <div className="profile">
        {postInfo.map(renderPost)}
        

        <i 
        className ="fa-solid fa-heart fa-2xl"
          onClick ={() => setHasUserLiked(!hasUserLiked)}
          style = {{color: hasUserLiked ? "red" : "lightgrey"}}>
        </i>
      </div>

      

    </>
  );
}  

export default App;
