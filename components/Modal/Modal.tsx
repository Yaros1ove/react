'use client'

import { createPortal } from 'react-dom'
import styles from './Modal.module.sass'
import { Dispatch, MouseEvent, ReactNode, SetStateAction } from 'react'
import classNames from 'classnames'

type Props = {
  children: ReactNode,
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
}

function Modal({ children, isOpen, setIsOpen }: Props) {

  return createPortal(
    <div
      onClick={() => { setIsOpen(false) }}
      className={classNames([styles.back, isOpen && styles.open])}>
      <div
        className={styles.modal}
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById('modal') as HTMLDivElement
  )
}

export default Modal