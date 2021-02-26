import { useState, useEffect} from 'react'
import styles from '../styles/components/Countdown.module.css'

let CountdownTimout: NodeJS.Timeout

export function Countdown(){
  const [time, setTime] = useState(25*60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time/60)
  const secund = time %60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(secund).padStart(2, '0').split('')

  function startCountdown(){
    setIsActive(true)
  }

  function resetCountdown(){
    clearTimeout(CountdownTimout)
    setIsActive(false)
    setTime(25 * 60)
  }

  useEffect(()=>{
    if(isActive && time > 0){
     CountdownTimout = setTimeout(()=>{
         setTime(time - 1)
      },1000)
    }else if(isActive && time ===0){
      setHasFinished(true)
      setIsActive(false)
    }
  },[isActive, time])

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
      Abarndonar ciclo
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