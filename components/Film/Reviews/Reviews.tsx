'use client'

import styles from './Reviews.module.sass'
import Review from './Review/Review'
import { useGetReviewsQuery } from '@/Utils/Redux/services/movieApi'

type Props = {
  id: string
}

function Reviews({ id }: Props) {
  const { data, isLoading, error } = useGetReviewsQuery(id)

  if ((error || !data) && !isLoading) {
    return <h2>Error</h2>
  }

  return (
    <div className={styles.reviews}>
      {data?.map(review => <Review review={review} key={review.id} />)}
    </div>
  )
}

export default Reviews