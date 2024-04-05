import React from 'react';
import { useNavigate } from 'react-router-dom';

function Escolha() {
  const navigate = useNavigate();

  const handleClick = (rota) => {
    navigate(rota);
  };

  return (
    <div className='escolha'>
      <header className="cabecalho">
        <div>
          <button className="botao-contato" onClick={() => handleClick('/contato')}>Contato</button>
          <button className="botao-home" onClick={() => handleClick('/')}>Home</button>
          <button className="botao-introducao" onClick={() => handleClick('/introducao')}>Sobre</button>
          <button className="botao-materias" onClick={() => handleClick('/materias')}>Matérias</button>
          <button className="botao-ppe" onClick={() => handleClick('/ppe')}>PPE</button>
         

        </div>
        <a href="/segundo.pdf" target="_blank" rel="noopener noreferrer">AV 1</a>

      </header>
      <a className="titulo-header" href='/'>Rafa</a>
     <h1>Aguarde! <br /> Página em construção.</h1> 
     <div class="loader">
  <div class="box1"></div>
  <div class="box2"></div>
  <div class="box3"></div>
</div>
    </div>
  );
}

export default Escolha;