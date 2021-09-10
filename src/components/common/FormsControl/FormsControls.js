import s from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            <div>
                {hasError ? <span>{meta.error}</span> : <span></span>}
            </div>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    let inputType = props.type
    const hasError = meta.error && meta.touched
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <input {...input} {...props}/>
            </div>
            <div>
                {hasError ? <span>{meta.error}</span> : <span></span>}
            </div>
        </div>
    )
}