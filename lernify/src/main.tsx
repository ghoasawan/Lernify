import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Footer from './Components/footer/footer.tsx'
import Header from './Components/header/Header.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      {/* <Header /> */}
      <Footer />
    </StrictMode>
  </BrowserRouter>
 
)
