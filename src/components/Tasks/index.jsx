import styles from './tasks.module.css'
import { Task } from '../Task'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export function Tasks({ tasks, onComplete, onDelete, onEdit }) {
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

        <TransitionGroup className={styles.list}>
        {tasks.map(task => (
          <CSSTransition
            key={task.id}
            timeout={500}
            classNames={{
              enter: styles.taskEnter,
              enterActive: styles.taskEnterActive,
              exit: styles.taskExit,
              exitActive: styles.taskExitActive,
            }}
          >
            <Task task={task} onComplete={onComplete} onDelete={onDelete} onEdit={onEdit} />
          </CSSTransition>
        ))}
      </TransitionGroup>
      </section>
    )
}