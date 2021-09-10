import preloader from "../../../Images/bars.svg";
import React from "react";
import s from './Preloader.module.css'

const Preloader = (props) => {
    return (
        <div className={s.preloader}>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader