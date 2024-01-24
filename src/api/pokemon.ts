import { MainClient } from 'pokenode-ts'

const api = new MainClient()

export const fetchList = async () => {
  return await api.pokemon
    .listPokemons()
    .then(data => data)
    .catch(error => console.error(error))
}

export const fetchTypes = async () => {
  return await api.pokemon
    .listTypes()
    .then(data => data)
    .catch(error => console.error(error))
}

export const getPokemonByName = async (name: string) => {
  return await api.pokemon
    .getPokemonByName(name)
    .then(data => data)
    .catch(error => console.error(error))
}
