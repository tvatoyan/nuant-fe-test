import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Details, List } from '../../features/Pokemon'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
