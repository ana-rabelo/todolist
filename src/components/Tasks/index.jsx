import styles from './tasks.module.css'
import { Task } from '../Task'

export function Tasks() {
    return (
        <section className={styles.tasks}>
        <header className={styles.header}>
          <div>
            <p>Tarefas criadas</p>
            <span>10</span>
          </div>
  
          <div>
            <p className={styles.textPurple}>Tarefas completas</p>
            <span>1 de 10</span>
          </div>
        </header>

        <div className={styles.list}>
            <Task />
        </div>
      </section>
    )
}