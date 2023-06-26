import Film from "@/components/Film/Film"
import Reviews from "@/components/Film/Reviews/Reviews"
import { Metadata } from "next"

type Props = {
  params: {
    id: string
  }
}

export const metadata: Metadata = {
  title: 'Фильм',
}

function FilmPage({ params: { id } }: Props) {

  return (
    <div>
      <Film id={id} />
      <Reviews id={id} />
    </div>
  )
}

export default FilmPage