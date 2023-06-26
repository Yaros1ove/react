'use client'

import Question from './Question/Question'
import styles from './Questions.module.sass'
import React from 'react'

const questions = [
  {
    question: 'Что такое Билетопоиск?',
    answer: 'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.'
  },
  {
    question: 'Какой компании принадлежит Билетопоиск?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, placeat.'
  },
  {
    question: 'Как купить билет на Билетопоиск?',
    answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, magni? Porro reiciendis assumenda tempora? Dicta, possimus. Explicabo saepe id nesciunt.'
  },
  {
    question: 'Как оставить отзыв на Билетопоиск?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis expedita ullam vero nemo vel quos temporibus similique modi rem sapiente ipsum a, nulla laborum culpa, magnam, hic officiis corporis.'
  }
]

function Questions() {
  const [currentChosen, setCurrentChosen] = React.useState('')
  const set = (question: string) => {
    if (question === currentChosen) {
      setCurrentChosen('')
    } else {
      setCurrentChosen(question)
    }
  }

  return (
    <>
      <div className={styles.header}>
        <h1>Вопросы-ответы</h1>
      </div>
      <div className={styles.questions}>
        {questions.map(question =>
          <Question
            key={question.question}
            question={question.question}
            answer={question.answer}
            currentChosen={currentChosen}
            setCurrentChosen={set} />
        )}
      </div>
    </>
  )
}

export default Questions