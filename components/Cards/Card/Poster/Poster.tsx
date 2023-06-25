import Image from 'next/image'
import styles from './Poster.module.sass'
import { useRouter } from 'next/navigation'
import { MouseEvent } from 'react'

type Props = {
  url: string,
  title: string, 
  id: string,
}

function Poster({ url, title, id }: Props) {
  const router = useRouter()

  const handleClick = (e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault()
    router.push(`/${id}`)
  }

  return (
    <Image
      className={styles.poster}
      alt={title}
      src={url}
      width={100}
      height={120}
      onClick={handleClick}
    />
  )
}

export default Poster