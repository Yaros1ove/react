'use client'

import styles from './Select.module.sass'
import Options from './Options/Options'
import Image from 'next/image'
import PopUp from './PopUp/PopUp'
import { Dispatch, RefObject, SetStateAction, createContext, useContext, useRef, useState } from 'react'
import classNames from 'classnames'
import { OptionsType } from '@/app/types'
import { useDispatch } from 'react-redux'

type Props = {
  name: string,
  currentOpen: string,
  setCurrentOpen: (name: string) => void,
  options: OptionsType,
  action: (value: string) => { payload: string; type: string },
}

type SelectContextType = {
  rootRef: RefObject<HTMLElement>,
  selected: string | undefined,
  setSelected: Dispatch<SetStateAction<string | undefined>>,
  action?: (args: any) => any,
  name: string,
  setCurrentOpen: (args: any) => void,
}

const SelectContext = createContext<SelectContextType>({
  rootRef: { current: null },
  selected: '',
  setSelected: () => useDispatch,
  setCurrentOpen: () => { },
  name: '',
})
export const useSelectContext = () => useContext(SelectContext)

function Select({ name, currentOpen, setCurrentOpen, options, action }: Props) {
  const [selected, setSelected] = useState<undefined | string>()
  const isOpen = currentOpen === name

  const rootRef = useRef<HTMLButtonElement>(null)

  return (
    <SelectContext.Provider value={{
      rootRef,
      selected,
      setSelected,
      action,
      name,
      setCurrentOpen,
    }}>
      <div>
        {isOpen
          &&
          <PopUp>
            <Options options={options} />
          </PopUp>}
        <p className={styles.header}>{name}</p>
        <div className={styles.wrapper}>
          <button
            ref={rootRef}
            onClick={() => setCurrentOpen(name)}
            className={classNames([styles.select, selected && styles.selected])}
          >
            {selected || `Выберите ${name.toLowerCase()}`}
          </button>
          <Image
            alt='arrow'
            src='selectArrow.svg'
            width={19}
            height={19}
            className={classNames([styles.arrow, isOpen && styles.flip])}
          />
        </div>
      </div>
    </SelectContext.Provider>
  )
}

export default Select