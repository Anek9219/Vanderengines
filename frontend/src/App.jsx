import { useState } from 'react'
import GeneralHeader from './Components/GeneralHeader'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './Pages/Blog'
import SMO from './Services/SMO'
import WebDevelopment from './Services/WebDevelopment'
import ContentWriting from './Services/ContentWriting'
import SEO from './Services/SEO'
import BPO from './Services/BPO'
import Graphic from './Services/Graphic'
import PayPerClick from './Services/PayPerClick'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <GeneralHeader/>
      <Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                   
                    <Route path="smo" element={<SMO />} />
                    <Route path="web" element={<WebDevelopment/>} />
                    <Route path="content" element={<ContentWriting/>} />
                    <Route path="ppc" element={<PayPerClick/>} />
                    <Route path="graphic" element={<Graphic/>} />
                    <Route path="bpo" element={<BPO/>} />
                    <Route path="seo" element={<SEO/>} />
                    {/* <Route path="blog" element={<Blog />} /> */}
                    {/* <Route path="*" element={<NoPage />} /> */}
                </Routes>
                <Footer/>
            </BrowserRouter>
    </>
  )
}

export default App
