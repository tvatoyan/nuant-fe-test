import { useEffect, useState, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Pokemon } from 'pokenode-ts'

import AppLayout from '../../../templates/AppLayout'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { getPokemonByName } from '../../../api'

const Details = () => {
  const [details, setDetails] = useState<Pokemon>()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      getPokemonByName(id).then(data => data && setDetails(data))
    }
  }, [id])

  const handleClick = useCallback(() => {
    navigate(`/`)
  }, [navigate])

  return (
    <AppLayout>
      <Button variant="outlined" onClick={handleClick}>
        Go Back
      </Button>
      <Box>
        <Typography>name: {details?.name}</Typography>
        <Typography>weight: {details?.weight}</Typography>
        <Typography>height: {details?.height}</Typography>
      </Box>
    </AppLayout>
  )
}

export default Details
