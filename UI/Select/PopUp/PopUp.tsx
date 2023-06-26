'use client'

import { createPortal } from 'react-dom'
import styles from './PopUp.module.sass'
import { ReactNode, useEffect } from 'react'
import { useSelectContext } from '../Select'

type Props = {
  children: ReactNode,
}

function PopUp({ children }: Props) {
  const { rootRef, name, setCurrentOpen } = useSelectContext()
  const coords = rootRef.current?.getBoundingClientRect() as DOMRect
  useEffect(() => {
    const handleClick = (e: MouseEvent): any => {
      if (e.target instanceof Node && !rootRef.current?.contains(e.target)) {
        setCurrentOpen('')
      }
    }
    const handleScroll = (): any => {
      setCurrentOpen('')
      rootRef.current?.blur()
    }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('click', handleClick)
    }
  }, [name, rootRef, setCurrentOpen])
  return createPortal(
    <div
      className={styles.popup}
      style={{
        top: `${coords.top + coords.height + 4}px`,
        left: `${coords.left}px`,
        width: `${coords.width}px`
      }}>
      {children}
    </div>, rootRef.current as HTMLButtonElement
  )
}

export default PopUp