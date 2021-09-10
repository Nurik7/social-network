import s from './Post.module.css'
import myPicture from '../../../../Images/2_5404390458459685303.jpg'

const Post = (props) => {
    return (
        <div className={s.profilePostItem}>
            <img className={s.profileImage} src={myPicture}/>
            <div className={s.postInner}>{props.postText}<span className={s.likes}>Likes {props.likes}</span></div>
        </div>
    )
}


export default Post