import Background from './Background/Background'
import Description from './Descr/Description'
import s from './Me.module.css'
import Preloader from "../../common/Preloader/Preloader";


const Me = props => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        let profileItem = [props.profile].map(p => (
            <Description fullName={p.fullName} lookingForAJob={p.lookingForAJob} userId={p.userId}
                         aboutMe={p.aboutMe} contacts={p.contacts} photos={p.photos} status={props.status}
                         updateStatus={props.updateStatus} authorizedUserId={props.authorizedUserId}
            />))
        return (
            <div>
                <Background/>
                <div className={s.profile__main}>
                    {profileItem}
                </div>
            </div>
        )
    }
}


export default Me