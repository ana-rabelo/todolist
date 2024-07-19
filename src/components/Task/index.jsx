import styles from './task.module.css';
import { TbTrash } from 'react-icons/tb';
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegCalendar } from "react-icons/fa";
import { BsFillCheckCircleFill } from 'react-icons/bs';

export function Task ({ task, onComplete, onDelete }) {
    
    function isTaskLate(conclusionDate) {
        const today = new Date();
        today.setDate(today.getDate() + 1);
        today.setHours(0, 0, 0, 0);
        
        const taskDate = new Date(conclusionDate);
        taskDate.setHours(0, 0, 0, 0);
        
        console.log(taskDate)
        console.log("today" + today)
        console.log(today >= taskDate)
        return today >= taskDate;
      }

    return (
        <div className={styles.task}>
            <div className={styles.text}>
                <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
                    { task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
                </button>

                <div className={styles.infoTask}>
                    <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>
                    <p className={task.isCompleted ? styles.textCompleted : isTaskLate(task.conclusionDate) ? styles.lateDate : ""}><FaRegCalendar /> {task.conclusionDate}</p>
                </div>
            </div>  

            <div className={styles.buttons}>
                <button className={styles.editButton}>
                    <AiOutlineEdit size={22} />
                </button>
                <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
                    <TbTrash size={20} />
                </button>
            </div>
            
        </div>
    )
}