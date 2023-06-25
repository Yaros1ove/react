import classNames from 'classnames'
import styles from './Options.module.sass'
import { Dispatch, RefObject, SetStateAction } from 'react'
import { OptionsType } from '@/app/types'

type Props = {
  options: OptionsType,
  setSelected: Dispatch<SetStateAction<string | undefined>>,
  setCurrentOpen: (name: string) => void,
  refLink: RefObject<HTMLButtonElement>,
  action?: (value: string) => { payload: string; type: string },
}

function Options({ options, setSelected, setCurrentOpen, refLink, action }: Props) {
  const handleClick = (option: typeof options[number]) => {
    if (!option.value) {
      setSelected('')
    } else {
      setSelected(option.name)
    }
    setCurrentOpen('')
    refLink.current?.blur()
    if (action) {
      action(option.value)
    }
  }

  return (
    <ul className={classNames([styles.options, styles.hidden])}>
      {options.map(option => <li onClick={() => handleClick(option)} className={styles.option} data-value={option.value} key={option.value}>{option.name}</li>)}
    </ul>
  )
}

export default Options