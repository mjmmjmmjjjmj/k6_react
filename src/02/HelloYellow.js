import styles from "./HelloYellow.module.css"
import { LiaDogSolid } from "react-icons/lia";

export default function HelloYellow() {
    return (
        // <h1 className={styles.ch1}>
        //     안녕하세요
        //     </h1>
        <div><LiaDogSolid className="text-sky-500 text-4xl"/></div>
    )
}