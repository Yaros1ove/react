import classNames from 'classnames'
import styles from './YesNoButton.module.sass'

type Props = {
  children: string,
  isYes?: boolean,
  onClick?: () => void,
}

function YesNoButton({ onClick, children, isYes = false }: Props) {
  return (
    <button onClick={onClick} className={classNames([styles.button, isYes ? styles.yes : styles.no])}>{children}</button>
  )
}

export default YesNoButton