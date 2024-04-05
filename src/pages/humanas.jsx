import React from 'react';
import { useNavigate } from 'react-router-dom';

function Humanas() {
  const navigate = useNavigate();

  const handleClick = (rota) => {
    navigate(rota);
  };

  return (
    <div className='humanas'>
      <header className="cabecalho">
        <div>
          <button className="botao-contato" onClick={() => handleClick('/contato')}>Contato</button>
          <button className="botao-home" onClick={() => handleClick('/')}>Home</button>
          <button className="botao-introducao" onClick={() => handleClick('/introducao')}>Sobre</button>
          <button className="botao-materias" onClick={() => handleClick('/materias')}>Matérias</button>
          <button className="botao-ppe" onClick={() => handleClick('/ppe')}>PPE</button>
          <button className="botao-1917" onClick={() => window.open('/Filme 1917 - Análise.pdf', '_blank')}>Filme 1917</button>
          <button className="botao-paises" onClick={() => window.open('/Atividade - Países.pdf', '_blank')}>Atividade sobre Países</button>
          <button className="botao-imperialismo" onClick={() => window.open('/Imperialismo.pdf', '_blank')}>Imperialismo</button>
  
        </div>
        <a href="/segundo.pdf" target="_blank" rel="noopener noreferrer">AV 1</a>

      </header>
      <a className="titulo-header" href='/'>Rafa</a>
     <h1>Clique aqui para acessar as <br /> atividades de Humanas!</h1> 
     <div class="loader">
  <div class="box1"></div>
  <div class="box2"></div>
  <div class="box3"></div>
</div>

<p className='paragrafo-1917'>Esta atividade teve como<br /> objetivo responder alguns<br /> tópicos sobre o filme 1917 <br /> e a 1° Guerra Mundial.<br /> Contemplou a H15 e H16. </p>
<p className='paragrafo-paises'>Esta atividade teve como<br /> objetivo criar uma apresentação<br /> sobre algum país para que<br /> pudessem haver comparações<br /> depois. Trabalhou a H8, H10 e H12.</p>
<p className='paragrafo-imperialismo'>Esta atividade teve como<br /> objetivo compreender o processo<br /> de partilha do continente<br /> africano e suas consequências<br /> para as nações envolvidas.<br /> Envolveu a H39.</p>

    </div>
  );
}

export default Humanas;