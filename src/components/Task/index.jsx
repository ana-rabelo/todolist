import styles from './task.module.css';
import { TbTrash } from 'react-icons/tb';
import { AiOutlineEdit } from "react-icons/ai";

export function Task (){
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div />
            </button>

            <p>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit
            </p>

            <button className={styles.editButton}>
                <AiOutlineEdit size={22} />
            </button>
            <button className={styles.deleteButton}>
                <TbTrash size={20} />
            </button>
        </div>
    )

}