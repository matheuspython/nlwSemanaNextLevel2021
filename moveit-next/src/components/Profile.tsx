import styles from '../styles/components/Profile.module.css'

export function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/matheuspython.png" alt="imagem do usuario"/>
      <div>
        <strong>Matheus Souza</strong>
        <p>level 1</p>
      </div>
    </div>
  )
}