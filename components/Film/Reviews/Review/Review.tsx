import Image from 'next/image'
import styles from './Review.module.sass'
import { ReviewType } from '@/app/types'

type Props = {
  review: ReviewType
}

function Review({ review }: Props) {
  return (
    <div className={styles.review}>
      <Image
        className={styles.avatar}
        alt='reviewAvatar'
        width={100}
        height={100}
        src={'reviewAvatar.svg'}
      />
      <div className={styles.details}>
        <div>
          <h3>{review.name}</h3>
          <p className={styles.rating}>Оценка: <span className={styles.ratingNumber}>{review.rating}</span></p>
        </div>
        <p>{review.text}</p>
      </div>
    </div>
  )
}

export default Review