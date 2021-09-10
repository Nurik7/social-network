import s from './Avatar.module.css'
import avatar from '../../../../../Images/avatar-4.png'

const Avatar = (props) => {
    return (
        <div className={s.profile__avatar}>
            {props.photo === null
                ? <img src={avatar}/>
                // (props.userId === props.authorizedUserId ?
                //     <img src="https://i1.sndcdn.com/artworks-RJG4jIrv6lZwWkQH-cWi6nA-t500x500.jpg"/> :
                //     <img src={avatar}/>)
                : <img src={props.photo}/>}
        </div>
    )
}


export default Avatar