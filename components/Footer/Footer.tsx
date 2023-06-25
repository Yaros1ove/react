import Link from 'next/link'
import styles from './Footer.module.sass'

function Footer() {
  return (
    <header className={styles.footer}>
      <Link className='link' href='/FAQ'>Вопросы-ответы</Link>
      <Link className='link' href='/about'>О нас</Link>
    </header>
  )
}

export default Footer