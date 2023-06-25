import Basket from './Basket/Basket'
import styles from './Header.module.sass'
import Link from 'next/link'

function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.headerLink} href='/'>Билетпоиск</Link>
      <Basket />
    </header>
  )
}

export default Header