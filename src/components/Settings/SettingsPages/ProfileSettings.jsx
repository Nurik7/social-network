import {useState} from "react";
import s from '../Settings.module.css'
import {settingsAPI} from "../../../API/Api";

const ProfileSettings = (props) => {
    let [avatarImage, setAvatarImage] = useState(null)
    let showImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = URL.createObjectURL(event.target.files[0])
            setAvatarImage(img)

        }
    }
    let uploadAvatar = async () => {
        let image = document.querySelector('#image')
        if (image.files && image.files[0]) {
            let formData = new FormData()
            formData.append('image', image.files[0])
            let response = await settingsAPI.uploadProfileAvatar(formData)
            if (response.data.resultCode === 0) {
                alert('Image downloaded successfully!')
            } else {
                alert('There was a problem with an image')
            }
        }
    }
    return (
        <div className={s.profileSettings}>
            <div> Profile Settings</div>
            {avatarImage ?
                <img src={avatarImage} alt="avatar"/> :
                <img className={s.downloadLogo} src="https://tinyurl.com/jwkumbpc"
                     alt="zaglushka"/>}
            <input type="file" name='changeAvatar' id='image' onChange={showImage}/>
            <button onClick={() => uploadAvatar()}>Set Image</button>

        </div>
    )

}
export default ProfileSettings