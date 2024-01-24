import { useReducer } from 'react'
import Router from '../../components/Router'
import { PokemonProvider } from '../../context'
import { initialState, reducer } from '../../store/reducer'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <PokemonProvider store={state} dispatch={dispatch}>
      <Router />
    </PokemonProvider>
  )
}

export default App
