'use client'

import Image from 'next/image'
import { selectAllTicketsAmount } from '@/Utils/Redux/selector'
import { useSelector } from 'react-redux'
import { StateType } from '@/Utils/Redux/store'
import styles from './Basket.module.sass'
import { useRouter } from 'next/navigation'
import { MouseEvent } from 'react'

function Basket() {
  const allTickets = useSelector(state => selectAllTicketsAmount(state as StateType))
  const router = useRouter()

  const handleClick = (e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault()
    router.push('/cart')
  }

  return (
    <div className={styles.basket}>
      {Boolean(allTickets)
        &&
        <div className={styles.amount}>
          {allTickets}
        </div>}

      <Image
        className={styles.icon}
        alt='counter'
        src='basket.svg'
        width={32}
        height={32}
        onClick={handleClick}
      />
    </div>
  )
}

export default Basket