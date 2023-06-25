import { GenreType } from "@/app/types"

export default function translateGenre(genre: GenreType): string {
  return dictionary[genre]
}

const dictionary = {
  fantasy: 'Фэнтези',
  horror: 'Ужасы',
  action: 'Экшен',
  comedy: 'Комедия',
}