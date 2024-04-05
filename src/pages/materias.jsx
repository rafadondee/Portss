import React from 'react';
import { useNavigate } from 'react-router-dom';

function Materias() {
  const navigate = useNavigate();

  const handleClick = (rota) => {
    navigate(rota);
  };

  return (
    <div className='materias'>
      <header className="cabecalho">
        <div>
          <button className="botao-contato" onClick={() => handleClick('/contato')}>Contato</button>
          <button className="botao-home" onClick={() => handleClick('/')}>Home</button>
          <button className="botao-introducao" onClick={() => handleClick('/introducao')}>Sobre</button>
          <button className="botao-materias" onClick={() => handleClick('/materias')}>Matérias</button>
          <button className="botao-ppe" onClick={() => handleClick('/ppe')}>PPE</button>
        </div>
      </header>
      <a className="titulo-header" href='/'>Rafa</a>


      <div className="cards-container">
  <div className="matematica-card" onClick={() => handleClick('/matematica')}>
    <h2>Matemática</h2>
    <img src="matematica.png" alt="" />
  </div>
  <div className="natureza-card" onClick={() => handleClick('/natureza')}>
    <h2>Natureza</h2>
    <img src="natureza.png" alt="" />
  </div>
  <div className="humanas-card" onClick={() => handleClick('/humanas')}>
    <h2>Humanas</h2>
    <img src="humanas.png" alt="" />
  </div>
  <div className="linguagens-card" onClick={() => handleClick('/linguagens')}>
    <h2>Linguagens</h2>
    <img src="linguagens.png" alt="" />
  </div>
  <div className="tecnico-card" onClick={() => handleClick('/tecnico')}>
    <h2>Atividades do Técnico</h2>
    <img src="tecnico.png" alt="" />
  </div>
  <div className="escolha-card" onClick={() => handleClick('/escolha')}>
    <h2>Atividades de Escolha</h2>
    <img src="escolha.png" alt="" />
  </div>
</div>

    </div>
  );
}

export default Materias;
