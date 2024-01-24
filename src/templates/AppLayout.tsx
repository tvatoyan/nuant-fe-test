import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'

interface Props {
  children: React.ReactNode
}

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ padding: '20px' }}>
        {children}
      </Container>
    </>
  )
}

export default AppLayout
