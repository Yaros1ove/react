'use client'

import { selectAllTicketsAmount } from '@/Utils/Redux/selector'
import styles from './page.module.sass'
import Cards from '@/components/Cards/Cards'
import { useSelector } from 'react-redux'
import { StateType } from '@/Utils/Redux/store'

function Page() {
  const tickets = useSelector(state => selectAllTicketsAmount(state as StateType))

  return (
    <div className={styles.container}>
      <Cards isBasket />
      <div className={styles.result}>
        <h2>Итого билетов:</h2>
        <p>{tickets}</p>
      </div>
    </div>
  )
}

export default Page