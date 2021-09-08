import React, {useEffect, useState} from "react";
import s from './Descr.module.css'

const ProfileStatusWithHooks = (props) => {
    // Чем больше самоубийц тем меньше самоубийц
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    const activateEditMode = () => setEditMode(true)

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => setStatus(e.target.value)

    useEffect(() => setStatus(props.status), [props.status])
    return (
        <div className={s.status}>
            Статус : &nbsp;
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}> {props.status || 'Enter your status'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks