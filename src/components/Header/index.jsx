import todoLogo from '../../assets/todolist-logo.svg'
import styles from './header.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useState, useEffect } from 'react';

export function Header({ onAddTask, taskToEdit }){
    const [title, setTitle] = useState('');
    const [conclusionDate, setConclusionDate] = useState('');
    const [id, setId] = useState(0);
    const today = new Date().toISOString().split('T')[0];
    
    useEffect(() => {
        if (taskToEdit) {
            setTitle(taskToEdit.title);
            setConclusionDate(taskToEdit.dueDate);
            setId(taskToEdit.id);
        } else {
            setTitle('');
            setConclusionDate('');
            setId(0);
        }
    }, [taskToEdit]);

    function handleSubmit(event) {
        event.preventDefault();

        onAddTask(id, title, conclusionDate);
        setTitle('');
        setConclusionDate('');
        setId(0);
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
                        maxLength={70}
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
                <button>{id ? 'Salvar' : 'Criar'} 
                    <AiOutlinePlusCircle 
                    size={20} 
                    color="#072D48" />
                </button>
            </form>
        </header>
    )
}