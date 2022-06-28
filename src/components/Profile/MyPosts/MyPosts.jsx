import { Post } from "./Post/Post";
import './myPosts.css';

export const MyPosts = (props) => {

  let postData = [
    {id: 1, massege: 'Hi, how are you?', likesCount: 12},
    {id: 2, massege: 'I am is OK!', likesCount: 121},
  ]

  return (
    <div className="myPosts">
      <h1>my posts</h1>
      <div className="myPost-textarea-wrap">
        <textarea
          className="myPosts__textarea"
          name=""
          id=""
          cols="20"
          rows="3"
        >
        </textarea>
        <button className="myPosts__button">
          Add post
        </button>
      </div>
      <Post
        message={postData[0].massege}
        likeCounts={postData[0].likesCount}
      />
      <Post
        message={postData[1].massege}
        likeCounts={postData[1].likesCount}
      />
    </div>
  )
}