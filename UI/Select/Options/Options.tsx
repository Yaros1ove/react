'use client'

import classNames from 'classnames'
import styles from './Options.module.sass'
import { OptionsType } from '@/app/types'
import { useSelectContext } from '../Select'


type Props = {
  options: OptionsType,
}

function Options({ options }: Props) {
  const { setSelected, setCurrentOpen, rootRef, action } = useSelectContext()

  const handleClick = (option: typeof options[number]) => {
    if (!option.value) {
      setSelected('')
    } else {
      setSelected(option.name)
    }
    setCurrentOpen('')
    rootRef.current?.blur()
    if (action) {
      action(option.value)
    }
  }

  return (
    <ul className={classNames([styles.options, styles.hidden])}>
      {options.map(option =>
        <li
          onClick={() => handleClick(option)}
          className={styles.option}
          data-value={option.value}
          key={option.value}
        >
          {option.name}
        </li>)
      }
    </ul>
  )
}

export default Options