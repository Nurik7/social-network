import s from './Post.module.css'


const Post = (props) => {
    return (
        <div className={s.profilePostItem}>
            <img className={s.profileImage} src="https://hhcdn.ru/photo/530946371.jpeg?t=1630497440&h=gLRlysVhN4eWRI6WudmZGA" />
            <div className={s.postInner}>{props.postText}<span className={s.likes}>Likes {props.likes}</span></div>
        </div>
    )
}


export default Post