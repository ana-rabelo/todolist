import styles from './tasks.module.css'
import { Task } from '../Task'

export function Tasks({ tasks, onComplete, onDelete }) {
  const tasksQtd = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

    return (
        <section className={styles.tasks}>
        <header className={styles.header}>
          <div>
            <p>Tarefas criadas</p>
            <span>{tasksQtd}</span>
          </div>
  
          <div>
            <p className={styles.textPurple}>Tarefas completas</p>
            <span>{completedTasks} de {tasksQtd}</span>
          </div>
        </header>

        <div className={styles.list}>
            {tasks.map(task => (
              <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} />
            ))}
        </div>
      </section>
    )
}