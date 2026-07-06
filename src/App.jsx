import React from 'react'
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import Navbartest from './components/Navbartest'
import Herotest from './components/Herotest'
import Error from './components/Error'

const Page = () => {
  const { page } = useParams()

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-4xl font-semibold capitalize text-white">
        {page.replace(/-/g, ' ')}
      </h1>
      <p className="text-indigo-200/70">This page is coming soon.</p>
      <Link to="/" className="text-[#8b74ec] hover:underline">
        Back to home
      </Link>
    </section>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden bg-[#0d1033] font-sans">
        <Navbartest />
        <Routes>
          <Route path="/" element={<Herotest />} />
          <Route path="/:page" element={<Page />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
