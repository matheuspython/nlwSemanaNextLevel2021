import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
 
  const hasActiveChallenge = true
 
  return(
    <div className={styles.ChallengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.ChallengeActive}>
          <header>Ganhe 400xp</header> 
          <main>
            <img src="icons/body.svg" alt="imagem de ativade fisica"/>
            <strong>Novo desafio</strong>
            <p>levante e faça uma caminhada de 3 minutos</p>
          </main>
          <footer>
          <button className={styles.challengeFailedButton} type="button">falhei</button>
          <button className={styles.challengeSucceededButton} type="button">completei</button>
          </footer>
        </div>
      ):(
        <div className={styles.ChallengeNotActive}>
        <strong>Finalize um ciclo para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="simbolo de uma seta"/>
          avance de level completando desafios.
        </p>
      </div>
      )}
    </div>
  )
}