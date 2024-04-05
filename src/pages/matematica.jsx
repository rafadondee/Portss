import React from 'react';
import { useNavigate } from 'react-router-dom';

function Matematica() {
  const navigate = useNavigate();

  const handleClick = (rota) => {
    navigate(rota);
  };

  return (
    <div className='matematica'>
      <header className="cabecalho">
        <div>
          <button className="botao-contato" onClick={() => handleClick('/contato')}>Contato</button>
          <button className="botao-home" onClick={() => handleClick('/')}>Home</button>
          <button className="botao-introducao" onClick={() => handleClick('/introducao')}>Sobre</button>
          <button className="botao-materias" onClick={() => handleClick('/materias')}>Matérias</button>
          <button className="botao-ppe" onClick={() => handleClick('/ppe')}>PPE</button>
          <button className="botao-arcosEangulos" onClick={() => window.open('/Av1 matemática - história .pdf', '_blank')}>AV 1</button>
        </div>
      
      </header>
      <a className="titulo-header" href='/'>Rafa</a>
      <h1>Clique aqui para acessar a <br /> primeira avaliação de Matemática!</h1>
      <div className="loader">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
      </div>
      <p className='paragrafo-av1Mtm'>Essa atividade foi feita com o objetivo<br />  de compreender melhor o uso de ângulos<br />  e arcos em situações cotidianas.<br /> Envolveu as habilidades H5 e H6.</p>
      <iframe className= 'video-gabigol' src="https://drive.google.com/file/d/18o8Xyt2uA48UvwHs0zfAMbo0qxMnBroD/preview" allow="autoplay"></iframe>
    </div>
  );
}

export default Matematica;
