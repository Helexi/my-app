import './Post.css'

export const Post = (props) => {
  return (
    <div className="post">
      <img
        className="post__img"
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" 
        alt="img"
      />
      {props.message}
      {' '}
      <span>Like</span>
      {' '}
      {props.likeCounts}
    </div>
  )
}