import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import SingleMovie from './SingleMovie'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<SingleMovie />} />
      <Route path="*">No page found</Route>
    </Routes>
  )
}

export default App
