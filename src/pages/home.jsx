// Importa o módulo React do pacote react
import React from 'react';
// Importa o hook useNavigate do pacote react-router-dom
import { useNavigate } from 'react-router-dom';
// Define a função do componente Home
function home() {
  // Obtém a função de navegação usando o hook useNavigate
  const irPara = useNavigate();
  // Define a função handleClick que será chamada ao clicar no botão
  const handleClick = () => {
    // Navegar para a página Sobre ao clicar em algum botão
    irPara('/introducao');
  };
  // Retorna a estrutura JSX da página inicial
  return (
    <div className='home' style={{ backgroundColor: '#f8f8f8' }}>
      {/* Título da página inicial */}
      <h1>Rafael Dondé</h1>      
      {/* Parágrafo */}
      <p>Fique a vontade para explorar meu portfólio!</p>
      {/* Imagem */}
      <img src="https://img1.picmix.com/output/stamp/normal/2/4/6/3/2363642_4cc47.gif" alt="Gif inicial" />
      {/* Botão para navegar para a página About ao ser clicado */}
      <button onClick={handleClick}>Let's go baby!</button>
    </div>
  );
}
// Exporta o componente Home como padrão
export default home;
