import Link from 'next/link'
import styles from './CardDescription.module.sass'

type Props = {
  title: string,
  genre: string,
  id: string
}

function CardDescription({ title, genre, id }: Props) {
  return (
    <div className={styles.cardDescription}>
      <Link className={styles.title} href={`/${id}`}>{title}</Link>
      <p>{genre}</p>
    </div>
  )
}

export default CardDescription