import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
  const { activeChallenge, resetChallenge, CompleteChallenge } = useContext(ChallengesContext)
  const {resetCountdown} = useContext(CountdownContext)

  function handleChallengeSucceded(){
    CompleteChallenge()
    resetCountdown()
  }

  function handleChallengeFailed(){
    resetChallenge()
    resetCountdown()
  }


  return(
    <div className={styles.ChallengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.ChallengeActive}>
          <header>Ganhe {activeChallenge.amount}</header> 
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="imagem de ativade fisica"/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
          <button onClick={handleChallengeFailed} className={styles.challengeFailedButton} type="button">falhei</button>
          <button onClick={handleChallengeSucceded} className={styles.challengeSucceededButton} type="button">completei</button>
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