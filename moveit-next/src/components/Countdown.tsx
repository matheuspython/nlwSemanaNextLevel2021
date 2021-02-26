import { useState, useEffect, useContext} from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/Countdown.module.css'



export function Countdown(){
  const {minutes,secund,hasFinished,isActive,startCountdown,resetCountdown} = useContext(CountdownContext)
 
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(secund).padStart(2, '0').split('')



  return(
    <div>
      <div className={styles.CountdownContainer}>
      <div>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>
      <span>:</span>
      <div>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </div>
    </div>

    {hasFinished ? (
    <button disabled type="button" className={styles.countdownButton}>
      ciclo encerrado
    </button>      
    ) :(
      <>
      {isActive ?(
    <button onClick={resetCountdown} type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
      Abandonar ciclo
    </button>)
    :
    (
    <button onClick={startCountdown} type="button" className={styles.countdownButton}>
      Iniciar um ciclo
    </button>)
    }
      </>      
    )
    }

    
    </div>
  )
}