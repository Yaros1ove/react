'use client'

import { ReactNode } from "react"
import { Provider as StoreProvider } from "react-redux"
import { store } from "./store"

type Props = {
  children: ReactNode
}

function Provider({ children }: Props) {
  return (
    <StoreProvider store={store}>{children}</StoreProvider>
  )
}

export default Provider