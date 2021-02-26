import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData{
  minutes:number
  secund:number
  hasFinished:boolean
  isActive:boolean
  startCountdown:()=> void
  resetCountdown:()=> void
}

interface CountdownProviderProps{
  children: ReactNode
}

export const CountdownContext = createContext({} as CountdownContextData)

let CountdownTimout: NodeJS.Timeout

export function CountdownProvider({children }: CountdownProviderProps){
  const {startNewChallenge} = useContext(ChallengesContext)
  const [time, setTime] = useState(25*60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time/60)
  const secund = time %60

  function startCountdown(){
    setIsActive(true)
  }

  function resetCountdown(){
    clearTimeout(CountdownTimout)
    setIsActive(false)
    setTime(25 * 60)
    setHasFinished(false)
  }

  useEffect(()=>{
    if(isActive && time > 0){
     CountdownTimout = setTimeout(()=>{
         setTime(time - 1)
      },1000)
    }else if(isActive && time ===0){
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  },[isActive, time])
  return(
    <CountdownContext.Provider value={{minutes,secund, hasFinished, isActive,  startCountdown,resetCountdown }}>
      {children}
    </CountdownContext.Provider>
  )
}