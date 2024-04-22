import React from 'react';
import './App.css';

import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias'; // Alterando o import para refletir a mudança de nome do componente
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria'; // Alterando o import para refletir a mudança de nome do componente
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria'; // Alterando o import para refletir a mudança de nome do componente

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} /> {/* Alterando de ListaTemas para ListaCategorias */}
            <Route path="/cadastroCategoria" element={<FormularioCategoria />} /> {/* Alterando de FormularioTema para FormularioCategoria */}
            <Route path="/editarCategoria/:id" element={<FormularioCategoria />} /> {/* Alterando de editarTema para editarCategoria */}
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} /> {/* Alterando de deletarTema para deletarCategoria */}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
