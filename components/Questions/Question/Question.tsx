'use client'

import styles from './Question.module.sass'
import classNames from 'classnames'
import React from 'react'
import Image from 'next/image'

type Props = {
  question: string,
  answer: string,
  currentChosen: string,
  setCurrentChosen: (question: string) => void
}



function Question({ question, answer, currentChosen, setCurrentChosen }: Props) {
  const isChosen = currentChosen === question

  return (
    <div className={styles.question} onClick={() => setCurrentChosen(question)}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{question}</h3>
        <Image
          alt='arrow'
          src='selectArrow.svg'
          width={28}
          height={28}
          className={classNames([styles.arrow, !isChosen || styles.flip])}
        />
      </div>
      {!isChosen || <p className={styles.answer}>{answer}</p>}
    </div>
  )
}

export default Question