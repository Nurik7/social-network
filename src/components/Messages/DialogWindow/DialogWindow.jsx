import s from './DialogWindow.module.css'
import React from "react";
import MessageItem from "./Messages/MessageItem";
import ChatItem from "./Chats/ChatItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControl/FormsControls";
import {maxLengthCreator, required} from "../../Validators/validators";

const DialogWindow = props => {
    let d = props.dialogsPage
    let chatsItem = d.chatsData.map(c => (<ChatItem key={c.id} id={c.id} name={c.name}/>))
    let messageItem = d.messagesData.map(m => (<MessageItem key={m.id} className={s.message} message={m.message}/>))
    let addMessageDialog = (formData) => {
        props.addMessage(formData.newMessageBody)
        formData.newMessageBody = ''
    }
    return (
        <div className={s.messagesWindow}>
            <div>
                <div className={s.chats}>
                    {chatsItem}
                </div>
            </div>
            <div>
                <div className={s.dialogWindow}>
                    {messageItem}
                    <AddMessageReduxForm onSubmit={addMessageDialog}/>
                </div>
            </div>
        </div>
    )
}

let maxLength20 = maxLengthCreator(20)
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name='newMessageBody' validate={[required, maxLength20]}
                   placeholder={'Write a message...'} className={s.messageText}/>
            <button>Send message!</button>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)
export default DialogWindow