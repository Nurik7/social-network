import s from "./Descr.module.css";
import Contacts from "./Contacts";
import Avatar from "./Avatar/Avatar";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const Description = (props) => {
  let contactsItem = [props.contacts].map((c, index) => (
    <Contacts
      key={index}
      facebook={c.facebook}
      github={c.github}
      instagram={c.instagram}
      mainLink={c.mainLink}
      twitter={c.twitter}
      vk={c.vk}
      website={c.website}
      youtube={c.youtube}
    />
  ));
  return (
    <div className={s.profileDescr}>
      <div>
        <div>
          <Avatar
            photo={props.photos.large}
            userId={props.userId}
            authorizedUserId={props.authorizedUserId}
          />
        </div>
        <div>
          <div className={s.fullName}>{`Full Name : ${
            props.fullName !== null ? props.fullName : "Данных еще нет :("
          }`}</div>
          <div className={s.lookingForAJob}>{`Looking For A Job Status : ${
            props.lookingForAJob !== null
              ? props.lookingForAJob
              : "Данных еще нет :("
          }`}</div>
          <div className={s.userId}>{`User ID : ${
            props.userId !== null ? props.userId : "Данных еще нет :("
          }`}</div>
          <div className={s.aboutMe}>{`About Me : ${
            props.aboutMe !== null ? props.aboutMe : "Данных еще нет :("
          }`}</div>
          <div className={s.contacts}>{contactsItem}</div>
        </div>
      </div>
      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  );
};

export default Description;
