import s from './Background.module.css'


const Background = () => {
    return (
        <div className={s.profile__background}>
            <img className={s.content__img} src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752" />
        </div>
    )
}


export default Background