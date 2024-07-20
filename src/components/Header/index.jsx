import todoLogo from '../../assets/todolist-logo.svg'
import styles from './header.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useState } from 'react';

export function Header({ onAddTask }){
    const [title, setTitle] = useState('');
    const [conclusionDate, setConclusionDate] = useState('');
    const today = new Date().toISOString().split('T')[0];
    
    function handleSubmit(event) {
        event.preventDefault();

        onAddTask(title, conclusionDate);
        setTitle('');
        setConclusionDate('');
    }

    function onChangeTitle(event) {
        setTitle(event.target.value)
    }

    function onChangeDate(event) {
        setConclusionDate(event.target.value)
    }
    
    return (
        <header className={styles.cabecalho}>
            <img src={todoLogo} alt="todolist logo" />

            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <div className={styles.newTaskInput}>
                    <input 
                        className={styles.inputTitle} 
                        placeholder="Adicionar nova tarefa" 
                        type="text" 
                        value={title}
                        onChange={onChangeTitle} 
                        required/>
                    <input 
                        className={styles.inputDate} 
                        type="date" 
                        min={today} 
                        value={conclusionDate}
                        onChange={onChangeDate} 
                        required/>
                </div>
                <button>Criar 
                    <AiOutlinePlusCircle 
                    size={20} 
                    color="#072D48" />
                </button>
            </form>
        </header>
    )
}