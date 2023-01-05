import style from "./styles.module.scss";

import ArrowUpIcon from "../../images/arrowUp.svg";
import GraficIcon from "../../images/grafics.svg";
import ConfigIcon from "../../images/config.svg";

export function Header(){
    return (
        <div>
            <div className={style.content}>
                <div className={style.buttons}>
                    <button><img src={ArrowUpIcon} alt="" /></button>
                    <button>?</button>
                </div>
                <h1>TERMO</h1>
                <div className={style.buttons}>
                    <button><img src={GraficIcon} alt="" /></button>
                    <button><img src={ConfigIcon} alt="" /></button>
                </div>
            </div>
        </div>
    );
}