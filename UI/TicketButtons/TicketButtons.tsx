'use client'

import styles from './TicketButtons.module.sass'
import { useSelector, useDispatch } from 'react-redux'
import { StateType } from '@/Utils/Redux/store'
import { selectFilmTicketsAmount } from '@/Utils/Redux/selector'
import { cartActions } from '@/Utils/Redux/features/cart'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  id: string,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
}

function TicketButtons({ id, setIsOpen }: Props) {
  const amount = useSelector(state => selectFilmTicketsAmount(state as StateType, id))
  const dispatch = useDispatch()

  const minusHandler = () => {
    if (amount === 1) {
      return setIsOpen(true)
    }

    return dispatch(cartActions.decrement(id))
  }

  return (
    <div className={styles.buttons}>
      <button
        onClick={minusHandler}
        disabled={amount <= 0}
        className={styles.button}>
        <Image
          className={styles.icon}
          alt='minus'
          src='minus.svg'
          width={12}
          height={12}
        />
      </button>
      {amount}
      <button
        onClick={() => dispatch(cartActions.increment(id))}
        disabled={amount >= 30}
        className={styles.button}>
        <Image
          className={styles.icon}
          alt='plus'
          src='plus.svg'
          width={12}
          height={12}
        />
      </button>
    </div>
  )
}

export default TicketButtons