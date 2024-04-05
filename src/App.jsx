// Importa o módulo React do pacote react
import React from 'react';
// Importa módulos específicos do pacote react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importa o componente Home da pasta 'pages'
import Home from './pages/home';
// Importa o componente Introdução da pasta 'pages'
import Introducao from './pages/introducao';
// Importa o componente COntato da pasta 'pages'
import Contato from './pages/contato';
// Importa o componente Materias da pasta 'pages'
import Materias from './pages/materias';
// Importa o componente Matematica da pasta 'pages'
import Matematica from './pages/matematica';
// Importa o componente Natureza da pasta 'pages'
import Natureza from './pages/natureza';
// Importa o componente Humanas da pasta 'pages'
import Humanas from './pages/humanas';
// Importa o componente Linguagens da pasta 'pages'
import Linguagens from './pages/linguagens';
// Importa o componente Tecnico da pasta 'pages'
import Tecnico from './pages/tecnico';
// Importa o componente Escolha da pasta 'pages'
import Escolha from './pages/escolha';
// Importa o componente PPE da pasta 'pages'
import PPE from './pages/ppe';
// Define a função do componente principal App
function App() {
  // Retorna a estrutura de roteamento usando o BrowserRouter
  return (
    <Router>
    
      {/* Define as rotas usando o componente Routes */}
      <Routes>
         {/* Rota para a página Home com o componente associado */}
        <Route path="/" element={<Home />} />        
          {/* Rota para a página About com o componente associado */}
        <Route path="/introducao" element={<Introducao />} />
          {/* Rota para a página Contato com o componente associado */}
        <Route path="/contato" element={<Contato />} />
          {/* Rota para a página Materias com o componente associado */}
        <Route path="/materias" element={<Materias />} />
          {/* Rota para a página Materias com o componente associado */}
        <Route path="/matematica" element={<Matematica />} />
        <Route path="/natureza" element={<Natureza />} />
        <Route path="/humanas" element={<Humanas />} />
        <Route path="/linguagens" element={<Linguagens />} />
        <Route path="/tecnico" element={<Tecnico/>} />
        <Route path="/escolha" element={<Escolha />} />
        <Route path="/ppe" element={<PPE />} />
      </Routes>
    </Router>
  );
}
// Exporta o componente App como padrão
export default App;
