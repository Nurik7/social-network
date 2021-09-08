import s from './NewPost.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Validators/validators";
import {Textarea} from "../../../common/FormsControl/FormsControls";

let maxLength50 = maxLengthCreator(50)

const NewPost = props => {
    let onAddPost = (formData) => {
        props.addPost(formData.newPostBody)
        formData.newPostBody = ''
    }
    return (
        <div className={s.profilePostsNew}>
            <AddPostReduxForm onSubmit={onAddPost}/>
        </div>
    )
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name='newPostBody'
                   className={s.newPostText} placeholder={'Write a post...'}
                   validate={[required, maxLength50]}/>
            <button>Tell my friends!</button>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'addPostForm'})(AddPostForm)

export default NewPost