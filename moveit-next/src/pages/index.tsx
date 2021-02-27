import { ChallengeBox } from "../components/ChallengeBox";
import { GetServerSideProps } from 'next'
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CountdownProvider } from "../contexts/CountdownContext";

import styles from '../styles/pages/Home.module.css'
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps{
  level:number
  currentExperience: number
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
     level={props.level}
     currentExperience={props.currentExperience}
     challengesCompleted={props.challengesCompleted}
     >
    <div className={styles.container}>
      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
            
          </div>
          <div>
          <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
    </ChallengesProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx)=>{
  const User = {
    level:1,
    currentExperience: 50,
    challengesCompleted:2,
  }
  const {level,currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props:{
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}