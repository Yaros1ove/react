import Film from "@/components/Film/Film"
import Reviews from "@/components/Film/Reviews/Reviews"

type Props = {
  params: {
    id: string
  }
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