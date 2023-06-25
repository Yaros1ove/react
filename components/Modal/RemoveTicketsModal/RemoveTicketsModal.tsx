import Image from 'next/image'
import styles from './RemoveTicketsModal.module.sass'
import { Dispatch, SetStateAction } from 'react'
import { useDispatch } from 'react-redux'
import YesNoButton from '@/UI/YesNoButton/YesNoButton'
import { cartActions } from '@/Utils/Redux/features/cart'

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  id: string,
  // dispatch: () => void
}

function RemoveTicketsModal({ setIsOpen, id }: Props) {
  const dispatch = useDispatch()

  return (
    <div>
      <div className={styles.header}>
        <h2>Удаление билета</h2>
        <Image
          className={styles.close}
          alt='close'
          src='close.svg'
          width={16}
          height={16}
          onClick={() => setIsOpen(false)}
        />
      </div>
      <p>Вы уверены, что хотите удалить билет?</p>
      <div className={styles.buttons}>
        <YesNoButton onClick={() => {
          dispatch(cartActions.delete(id))
          setIsOpen(false)
        }} isYes>Да</YesNoButton>
        <YesNoButton onClick={() => setIsOpen(false)}>Нет</YesNoButton>
      </div>
    </div>
  )
}

export default RemoveTicketsModal