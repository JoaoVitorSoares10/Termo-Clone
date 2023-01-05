import { Letter } from "./Letter";
import style from "./styles.module.scss";

export function Board(){
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.line}>
                    <Letter />
                    <Letter />
                    <Letter />
                    <Letter />
                    <Letter />
                </div>
                <div className={style.line}>
                    <Letter />
                    <Letter />
                    <Letter />
                    <Letter />
                    <Letter />
                </div>
                <div className={style.line}>
                    <Letter />
                    <Letter />
                    <Letter />
                    <Letter />
                    <Letter />
                </div>
                <div className={style.line}>
                    <Letter />
                    <Letter />
                    <Letter />
                    <Letter />
                    <Letter />
                </div>
                <div className={style.line}>
                    <Letter />
                    <Letter />
                    <Letter />
                    <Letter />
                    <Letter />
                </div>
                <div className={style.line}>
                    <Letter />
                    <Letter />
                    <Letter />
                    <Letter />
                    <Letter />
                </div>
            </div>
        </div>
    );
}