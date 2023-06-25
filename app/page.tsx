import Cards from "@/components/Cards/Cards"
import styles from './page.module.sass'
import Search from "@/components/Search/Search"

async function Home() {

  return (
    <div className={styles.main}>
      <Search />
      <Cards />
    </div>
  )
}

export default Home