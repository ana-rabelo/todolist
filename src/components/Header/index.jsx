import todoLogo from '../../assets/todolist-logo.svg'
import styles from './header.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useState } from 'react';

export function Header({ onAddTask }){
    const [title, setTitle] = useState('');
    const [conclusionDate, setConclusionDate] = useState(null);
    
    function handleSubmit(event) {
        
        onAddTask()
    }

    function onChangeTitle(event) {
        setTitle(event.target.value)
    }
    
    return (
        <header className={styles.cabecalho}>
            <img src={todoLogo} alt="todolist logo" />

            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <div className={styles.newTaskInput}>
                    <input placeholder="Adicionar nova tarefa" type="text" onChange={onChangeTitle} />
                </div>
                <button>Criar 
                    <AiOutlinePlusCircle 
                    size={20} 
                    color="#072D48" /></button>
            </form>
        </header>
    )
}