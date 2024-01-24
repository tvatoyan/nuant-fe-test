import React, { createContext } from 'react'
import { Action } from '../types'

interface Props {
  store: { search: string; type: string }
  dispatch: (data: Action) => void
  children: React.ReactNode
}

export const PokemonContext = createContext({
  store: {
    search: '',
    type: '',
  },
  dispatch: (data: Action): void => {
    console.log(data)
  },
})

export const PokemonProvider = ({ store, dispatch, children }: Props) => {
  return <PokemonContext.Provider value={{ store, dispatch }}>{children}</PokemonContext.Provider>
}
