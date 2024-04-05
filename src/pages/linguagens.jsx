import React from 'react';
import { useNavigate } from 'react-router-dom';

function Linguagens() {
  const navigate = useNavigate();

  const handleClick = (rota) => {
    navigate(rota);
  };

  return (
    <div className='linguagens'>
      <header className="cabecalho">
        <div>
          <button className="botao-contato" onClick={() => handleClick('/contato')}>Contato</button>
          <button className="botao-home" onClick={() => handleClick('/')}>Home</button>
          <button className="botao-introducao" onClick={() => handleClick('/introducao')}>Sobre</button>
          <button className="botao-materias" onClick={() => handleClick('/materias')}>Matérias</button>
          <button className="botao-ppe" onClick={() => handleClick('/ppe')}>PPE</button>
          <button className="botao-sobremim" onClick={() => window.open('/quem sou eu.pdf', '_blank')}>Sobre mim</button>
          <button className="botao-past" onClick={() => window.open('/simplepast.jpg', '_blank')}>Simple Past</button>
          <button className="botao-modernismo" onClick={() => window.open('/urupes.pdf', '_blank')}>Pré Modernismo</button>
        </div>
        <a href="/segundo.pdf" target="_blank" rel="noopener noreferrer">AV 1</a>

      </header>
      <a className="titulo-header" href='/'>Rafa</a>
     <h1>Clique aqui para acessar as <br /> atividades de Linguagens!</h1> 
     <div class="loader"> 
  <div class="box1"></div>
  <div class="box2"></div>
  <div class="box3"></div>
 
  <p className='paragrafo-sobremim'>Esta atividade teve como<br /> objetivo mostrar em um<br /> pequeno texto quem eu sou.<br /> Falei um pouco sobre<br /> meus hobbies, interesses<br /> profissionais e minhas<br /> caracteristícas.<br /> Contemplou a H2, H3 e H5.</p>
  <p className='paragrafo-past'>Esta atividade teve como<br /> objetivo interpretar a<br /> imagem, como se fosse uma<br /> postagem do Instagram.<br /> Abordou a H11, H25, H10 e H24 </p>
  <p className='paragrafo-modernismo'>Esta atividade teve <br /> objetivo interpretar <br />alguma obra dentre<br /> as disponíveis. Nosso<br /> grupo escolheu Urupês<br /> de Monteiro Lobato.<br /> Abordou a H3, H4, H16, H22 e H24 </p>
</div>
    </div>
  );
}

export default Linguagens;