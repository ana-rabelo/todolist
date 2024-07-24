import styles from './task.module.css';
import { TbTrash } from 'react-icons/tb';
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegCalendar } from "react-icons/fa";

export function Task ({ task, onComplete, onDelete, onEdit }) {

    function handleDelete() {
        if (window.confirm(`"${task.title}" será excluída definitivamente. Deseja continuar?`)) {
            onDelete(task.id);
        }
    }

    function handleEdit() {
        onEdit(task);
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = String(date.getDate() + 1).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    const today = new Date() .toISOString().split('T')[0];
    const isLate = task.conclusionDate < today;

    return (
        <div className={styles.task}>
            <div className={styles.text}>
                <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
                    { task.isCompleted ? <lord-icon src="https://cdn.lordicon.com/lomfljuq.json" trigger="in" colors="primary:#5e60ce"></lord-icon> : <div />}
                </button>

                <div className={styles.infoTask}>
                    <p className={task.isCompleted ? styles.textCompleted : ""}>
                        {task.title}
                    </p>
                    <p className={`${task.isCompleted ? styles.textCompleted : ""} ${isLate ? styles.lateDate : ""}`}>
                        <FaRegCalendar /> {formatDate(task.conclusionDate)}
                    </p>
                </div>
            </div>  

            <div className={styles.buttons}>
                <button className={styles.editButton} onClick={handleEdit} disabled={task.isCompleted}>
                    <AiOutlineEdit size={22} />
                </button>
                <button className={styles.deleteButton} onClick={handleDelete}>
                    <TbTrash size={20} />
                </button>
            </div>
            
        </div>
    )
}