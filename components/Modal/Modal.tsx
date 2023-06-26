'use client'

import { createPortal } from 'react-dom'
import styles from './Modal.module.sass'
import { Dispatch, MouseEvent, ReactNode, SetStateAction, createContext, useContext } from 'react'
import classNames from 'classnames'

type Props = {
  children: ReactNode,
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
}
type ModalContextType = {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
}
const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  setIsOpen: () => { },
})
export const useModalContext = () => useContext(ModalContext)


function Modal({ children, isOpen, setIsOpen }: Props) {



  return createPortal(
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <div
        onClick={() => { setIsOpen(false) }}
        className={classNames([styles.back, isOpen && styles.open])}
      >
        <div
          className={styles.modal}
          onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById('modal') as HTMLDivElement
  )
}

export default Modal