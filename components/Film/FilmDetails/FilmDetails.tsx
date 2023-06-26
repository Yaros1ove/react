import TicketButtons from "@/UI/TicketButtons/TicketButtons"
import translateGenre from "@/Utils/translator"
import styles from './FilmDetails.module.sass'
import { FilmType } from "@/app/types"
import { useState } from "react"
import Modal from "@/components/Modal/Modal"
import RemoveTicketsModal from "@/components/Modal/RemoveTicketsModal/RemoveTicketsModal"

type Props = {
  film: FilmType
}

function FilmDetails({ film }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {isOpen
        &&
        <Modal isOpen setIsOpen={setIsOpen}>
          <RemoveTicketsModal id={film.id} /></Modal>}
      <div className={styles.header}>
        <h1 className={styles.title}>{film.title}</h1>
        <TicketButtons setIsOpen={setIsOpen} id={film.id} />
      </div>
      <div className={styles.properties}>
        <p><span>Жанр:</span> {translateGenre(film.genre)}</p>
        <p><span>Год выпуска:</span> {film.releaseYear}</p>
        <p><span>Рейтинг:</span> {film.rating}</p>
        <p><span>Режиссер:</span> {film.director}</p>
      </div>
      <div className={styles.description}>
        <h3>Описание</h3>
        <p>{film.description}</p>
      </div>
    </div>
  )
}

export default FilmDetails