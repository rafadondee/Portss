import React from 'react';
import { useNavigate } from 'react-router-dom';

function Natureza() {
  const navigate = useNavigate();

  const handleClick = (rota) => {
    navigate(rota);
  };

  return (
    <div className='natureza'>
      <header className="cabecalho">
        <div>
          <button className="botao-contato" onClick={() => handleClick('/contato')}>Contato</button>
          <button className="botao-home" onClick={() => handleClick('/')}>Home</button>
          <button className="botao-introducao" onClick={() => handleClick('/introducao')}>Sobre</button>
          <button className="botao-materias" onClick={() => handleClick('/materias')}>Matérias</button>
          <button className="botao-ppe" onClick={() => handleClick('/ppe')}>PPE</button>
          <button className="botao-organica" onClick={() => window.open('/Revisão orgânica.pdf', '_blank')}>Revisão Orgânica</button>
          <button className="botao-evolucionismo" onClick={() => window.open('/evolucionismo.jpg', '_blank')}>Meme Evolucionismo</button>
          <button className="botao-circuitos" onClick={() => window.open('/Circuitos.pdf', '_blank')}>Relatório Circuitos</button>
        </div>
        <a href="/segundo.pdf" target="_blank" rel="noopener noreferrer">AV 1</a>

      </header>
      <a className="titulo-header" href='/'>Rafa</a>
     <h1>Clique nos botões para acessar<br />  as atividades de Natureza!</h1> 
     <div class="loader">
  <div class="box1"></div>
  <div class="box2"></div>
  <div class="box3"></div>
</div>
<p className='paragrafo-organica'>Esta atividade teve como<br /> objetivo responder 6<br /> tópicos sobre Orgânica.<br /> Contemplou as H3, H4 e H5. </p>
<p className='paragrafo-evolucionismo'>Esta atividade teve como<br /> objetivo criar um meme<br /> sobre evolucionismo.<br /> Trabalhou a habilidade H11.</p>
<p className='paragrafo-circuitos'>Esta atividade teve como<br /> objetivo responder algumas<br /> perguntas, sendo a entrega<br /> final um relatório sobre os<br /> circuitos estudados.</p>
    </div>
  );
}

export default Natureza;