'use client'

import styles from './Select.module.sass'
import Options from './Options/Options'
import Image from 'next/image'
import PopUp from './PopUp/PopUp'
import { useRef, useState } from 'react'
import classNames from 'classnames'
import { OptionsType } from '@/app/types'

type Props = {
  name: string,
  currentOpen: string,
  setCurrentOpen: (name: string) => void,
  options: OptionsType,
  action: (value: string) => { payload: string; type: string },
}

function Select({ name, currentOpen, setCurrentOpen, options, action }: Props) {
  const [selected, setSelected] = useState<undefined | string>()
  const isOpen = currentOpen === name

  const ref = useRef<HTMLButtonElement>(null)

  return (
    <div>
      {isOpen && <PopUp refLink={ref} name={name} setCurrentOpen={setCurrentOpen}><Options action={action} refLink={ref} setCurrentOpen={setCurrentOpen} setSelected={setSelected} options={options} /></PopUp>}
      <p className={styles.header}>{name}</p>
      <div className={styles.wrapper}>
        <button
          ref={ref}
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
  )
}

export default Select