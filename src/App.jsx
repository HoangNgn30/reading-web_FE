import { useState } from 'react'
import Header from './header/Header'
import MainContent from './main-content/MainContent'
import Department from './department/Department'
import Contact from './contact/Contact'

function App() {
  return (
    <>
      <Header></Header>
      <MainContent></MainContent>
      <Department/>
      <Contact/>
    </>
  )
}

export default App
