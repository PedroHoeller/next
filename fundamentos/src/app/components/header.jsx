import style from "../../styles/header.module.css";

export default function Header(props){
    return (
        <div className={style.header}>
            <div className={style.container}>
                <h1>{props.titulo}</h1>
            </div>
        </div>
    )
}