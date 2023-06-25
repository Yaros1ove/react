import styles from './Card.module.sass'
import Poster from '@/components/Cards/Card/Poster/Poster'
import CardDescription from './CardDescription/CardDescription'
import TicketButtons from '@/UI/TicketButtons/TicketButtons'
import translateGenre from '@/Utils/translator'
import { FilmType } from '@/app/types'
import Image from 'next/image'
import { useState } from 'react'
import Modal from '@/components/Modal/Modal'
import RemoveTicketsModal from '@/components/Modal/RemoveTicketsModal/RemoveTicketsModal'

type Props = {
  film: FilmType,
  isBasket?: boolean
}

function Card({ film, isBasket = false }: Props) {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className={styles.card}>
      {isOpen && <Modal isOpen setIsOpen={setIsOpen}><RemoveTicketsModal id={film.id} setIsOpen={setIsOpen} /></Modal>}
      <div className={styles.info}>
        <Poster url={film.posterUrl} id={film.id} title={film.title} />
        <CardDescription title={film.title} genre={translateGenre(film.genre)} id={film.id} />
      </div>
      <div className={styles.buttons}>
        <TicketButtons setIsOpen={setIsOpen} id={film.id} />
        {isBasket && <Image onClick={() => setIsOpen(true)} className={styles.cross} alt='close' src='close.svg' width={20} height={20} />}
      </div>
    </div>
  )
}

export default Card