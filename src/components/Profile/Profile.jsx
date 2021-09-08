import s from './Profile.module.css'
import Posts from './Posts/Posts'
import Me from './Me/Me'


const Profile = props => {
    return <div className={s.content}>
        <Me profileDescription={props.profileDescription} profile={props.profile}
            status={props.status} updateStatus={props.updateStatus} authorizedUserId={props.authorizedUserId}/>
        <Posts state={props.state} postsData={props.postsData}/>
    </div>
}


export default Profile