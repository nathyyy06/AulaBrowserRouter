import React from 'react'
import ReactDOM from 'react-dom/client'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from'./Home'
import Produtos from './Produtos'
import Oferta from './src/Oferta'
import './globals.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/produtos" element={<Produtos/>}/>
      <Route path="/oferta" element={<Oferta/>}/>
     
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)




