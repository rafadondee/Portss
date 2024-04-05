import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Introducao() {
  const navigate = useNavigate();

  const handleClick = (rota) => {
    navigate(rota);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='introducao'>
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

    
      <h1 style={{ animation: 'scaleIn 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) forwards' }}>Sobre</h1>
      <h2>Rotina</h2>

  

      <Slider {...settings}>
        <div>
          <a href="https://www.canva.com/design/DAFEy9aRwGA/jBesSjfrLWaRrzFofmUxng/view?utm_content=DAFEy9aRwGA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
            <img src="/public/primeiro.png" alt="Portfólio 1°Ano" />
          </a>
        </div>
        <div>
          <a href="https://www.canva.com/design/DAFcW4o8Mf4/OzGQ_VbkgJVOxjTIleOUjQ/view?utm_content=DAFcW4o8Mf4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
            <img src="/public/segundo.png" alt="Portfólio 2°Ano" />
          </a>
        </div>
      </Slider>

      <p className='sobre'>
        Me chamo Rafael Cardoso Dondé, estou no 3° ano do ensino médio e tenho 17 anos. Sou nascido e criado em Florianópolis, Santa Catarina. Trabalho na Softplan como jovem aprendiz no cargo de Designer Gráfico, estou amando a experiência. 
        Gosto muito de jogar vôlei e praticar esportes. Faço musculação na academia e é um dos meus lugares preferidos, onde consigo relaxar e me desligar do mundo, quase como uma terapia.
        No meu tempo livre gosto de estudar, desde neurociências até programação, para adquirir um bom repertório independente da área que eu optar seguir. Acredito que ter um bom conhecimento de mundo, viver “fora da bolha” é extremamente benéfico pois possibilita uma visão fora da caixa, entendendo como você e outras pessoas funcionam em diferentes ambientes. Me dedico na grande maioria das coisas que faço, desde pequeno, pois acredito que uma pessoa que se esforça acima da média, é alguém que vai conseguir conquistar seus objetivos e consequentemente abandonar a mediocridade.
      </p>
  
      <div className='container'>
        <p className='titulo1'>Portfólios</p>
      </div>

      <div className='card-form'>
        <table className='rotina-table'>
          <thead>
            <tr>
              <th>Horário</th>
              <th>Segunda</th>
              <th>Terça</th>
              <th>Quarta</th>
              <th>Quinta</th>
              <th>Sexta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>06:30</td>
              <td>Escola</td>
              <td>Escola</td>
              <td>Escola</td>
              <td>Escola</td>
              <td>Escola</td>
            </tr>
            <tr>
              <td>14:00</td>
              <td>Trabalho</td>
              <td>Trabalho</td>
              <td>Trabalho</td>
              <td>Trabalho</td>
              <td>Curso <br />do trabalho</td>
              
              
            </tr>

            <tr>
              <td>17:00 <br />ou 18:00</td>
              <td>Vôlei</td>
              <td>Academia</td>
              <td>Vôlei</td>
              <td>Academia</td>
              <td>Curso <br />do trabalho</td>
              
            </tr>

            <tr>
              <td>20:00</td>
              <td>Academia</td>
              <td>Livre</td>
              <td>Academia</td>
              <td>Livre</td>
              <td>Livre</td>             
            </tr>
        
          </tbody>
        </table>
      </div>

      <div className='container2'></div>
      <div className='container3'></div>

      {/* Botão com seta para cima */}
      <img className='botao-flecha' src="/public/mao-cima.png" alt="Flecha para cima" onClick={handleScrollToTop}/>
    </div>
    
  );
}

export default Introducao;
