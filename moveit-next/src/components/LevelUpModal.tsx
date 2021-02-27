import styles from '../styles/components/levelUpModal.module.css'

export function LevelUpModal(){
  return(
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>2</header>
        <strong>parabéns</strong>
        <p>Você alcançou um novo level.</p>
        <button type="button">
          <img src="/icons/close.svg" alt="fechar modal"/>
        </button>
      </div>
    </div>
  )
}