import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ThanksPage from './pages/ThanksPage'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thanks" element={<ThanksPage />} />
      </Routes>
    </Router>
  )
}

export default App
