import style from "./styles.module.scss";
import DelIcon from "../../../images/delete.svg";
import cx from 'classnames';

interface KeyProps {
    text: String;
}

export function Key({text}:KeyProps){
    if(text === "del"){
        return (
            <button className={style.deleteButton}>
                <img src={DelIcon} alt=""/>
            </button>
        );
    }else if(text === "A"){
        return (
            <button className={cx(style.button, style.buttonA)}>
                {text}
            </button>
        );
    }else if(text === "Z"){
        return (
            <button className={cx(style.button, style.buttonZ)}>
                {text}
            </button>
        );
    }else {
        return (
            <button className={text === "ENTER" ? style.enterButton : style.button}>
                {text}
            </button>
        );
    }
}