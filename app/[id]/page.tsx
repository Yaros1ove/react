import { useGetMovieQuery } from "@/Utils/Redux/services/movieApi"
import Film from "@/components/Film/Film"
import Reviews from "@/components/Film/Reviews/Reviews"
import { Metadata, ResolvingMetadata } from "next"

type Props = {
  params: {
    id: string
  }
}

// export async function generateMetadata({ params: { id } }: Props, parent: ResolvingMetadata): Promise<Metadata> {
//   const { data, isLoading, error } = useGetMovieQuery(id)
// }

function FilmPage({ params: { id } }: Props) {

  return (
    <div>
      <Film id={id} />
      <Reviews id={id} />
    </div>
  )
}

export default FilmPage