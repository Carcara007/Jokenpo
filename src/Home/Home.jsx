import styles from './Home.module.css'
import Game from '../components/Game/Game'

function Home() {

  return (
    <>
      <section className={styles.secAll}>
        <Game/>
      </section>

    </>
  )
}

export default Home
