import style from "./styles.module.scss";

import { Board } from "../../components/Board";
import { Header } from "../../components/Header";
import { Keyboard } from "../../components/Keyboard";

export function Home(){
    return (
        <div className={style.container}> 
            <Header />
            <Board />
            <Keyboard />
        </div>
    );
}