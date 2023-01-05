import style from "./styles.module.scss";
import { Key } from "./Key";

export function Keyboard(){
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div>
                    <Key text="Q"/>
                    <Key text="W"/>
                    <Key text="E"/>
                    <Key text="R"/>
                    <Key text="T"/>
                    <Key text="Y"/>
                    <Key text="U"/>
                    <Key text="I"/>
                    <Key text="O"/>
                    <Key text="P"/>
                </div>
                <div>  
                    <Key text="A"/>
                    <Key text="S"/>
                    <Key text="D"/>
                    <Key text="F"/>
                    <Key text="G"/>
                    <Key text="H"/>
                    <Key text="J"/>
                    <Key text="K"/>
                    <Key text="L"/>
                    <Key text="del"/>
                </div>
                <div>
                    <Key text="Z"/>
                    <Key text="X"/>
                    <Key text="C"/>
                    <Key text="V"/>
                    <Key text="B"/>
                    <Key text="N"/>
                    <Key text="M"/>
                    <Key text="ENTER"/>
                </div>
            </div>
        </div>
    );
}