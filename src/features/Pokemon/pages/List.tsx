import { useEffect, useState, useContext, useCallback, ChangeEvent, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { NamedAPIResourceList } from 'pokenode-ts'
import AppLayout from '../../../templates/AppLayout'

import TextField from '@mui/material/TextField'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'

import { fetchList, fetchTypes } from '../../../api'
import { PokemonContext } from '../../../context'
import { Action } from '../../../types'
import { debounce } from '../utils'

const PokemonList = () => {
  const { store, dispatch } = useContext(PokemonContext)
  const [list, setList] = useState<NamedAPIResourceList>()
  const [types, setTypes] = useState<NamedAPIResourceList>()
  const [search, setSearch] = useState<string>(store.search)
  const [type, setType] = useState<string>(store.type)
  const navigate = useNavigate()

  const ds = useCallback(
    debounce((data: Action) => dispatch(data), 300),
    []
  )

  useEffect(() => {
    fetchList().then(list => list && setList(list))
    fetchTypes().then(types => types && setTypes(types))
  }, [])

  const handleSearchChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
      ds({ type: 'search', payload: e.target.value })
    },
    [ds]
  )

  const handleTypeChange = useCallback(
    (e: SelectChangeEvent<string>) => {
      setType(e.target.value)
      ds({ type: 'type', payload: e.target.value })
    },
    [ds]
  )

  const handleClick = useCallback(
    (name: string) => {
      navigate(`/${name}`)
    },
    [navigate]
  )

  const filteredData = useMemo(() => {
    return list?.results.filter(el => {
      if (search === '') {
        return el
      } else {
        return el.name.toLowerCase().includes(search)
      }
    })
  }, [search, list?.results])

  return (
    <AppLayout>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField label="Search" value={search} sx={{ width: '100%' }} onChange={handleSearchChange} />
        </Grid>
        <Grid item xs={6}>
          <Select label="Type" value={type} sx={{ width: '100%' }} onChange={handleTypeChange}>
            {types?.results.map(item => (
              <MenuItem key={item.name} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
      <List subheader={<li />}>
        {filteredData?.map(item => (
          <ListItem key={item.name} onClick={() => handleClick(item.name)}>
            <ListItemText primary={`${item.name}`} />
          </ListItem>
        ))}
      </List>
    </AppLayout>
  )
}

export default PokemonList
