import Post from './Post/Post'
import s from './Posts.module.css'
import NewPostContainer from "./NewPost/NewPostContainer";
import React from 'react'

const Posts = React.memo(props => {
    let postItem = props.postsData.map(post => (
        <Post likes={post.likes} postText={post.postText} key={post.id}/>)).reverse()
    return (
        <div className={s.profile__posts}>
            <NewPostContainer/>
            {postItem}
        </div>
    )
})


export default Posts