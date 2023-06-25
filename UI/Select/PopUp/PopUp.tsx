'use client'

import { createPortal } from 'react-dom'
import styles from './PopUp.module.sass'
import { ReactNode, RefObject, useEffect } from 'react'

type Props = {
  children: ReactNode,
  setCurrentOpen: (name: string) => void,
  refLink: RefObject<HTMLButtonElement>,
  name: string,
}

function PopUp({ children, refLink, name, setCurrentOpen }: Props) {
  const coords = refLink.current?.getBoundingClientRect() as DOMRect
  useEffect(() => {
    const handleClick = (e: MouseEvent): any => {
      if (e.target instanceof Node && !refLink.current?.contains(e.target)) {
        setCurrentOpen('')
      }
    }
    const handleScroll = (): any => {
      setCurrentOpen('')
      refLink.current?.blur()
    }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('click', handleClick)
    }
  }, [name])
  return createPortal(
    <div className={styles.popup} style={{ top: `${coords.top + coords.height + 4}px`, left: `${coords.left}px`, width: `${coords.width}px` }}>
      {children}
    </div>, refLink.current as HTMLButtonElement
  )
}

export default PopUp