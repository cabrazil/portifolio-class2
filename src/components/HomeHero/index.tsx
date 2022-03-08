/* eslint-disable react/jsx-no-comment-textnodes */
import picture from '../../assets/pessoa.webp';
import { CodeItem, Container, InfosContainer, TextContainer } from './styles';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img src={picture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Carlos</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span>
            {'\u007B'}
            <div>
              Nome: <span className="blue">Carlos,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Brazil</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Cargo</span>
            {'\u007B'}
            <div>
              Função: <span className="blue">Dev Fullstack,</span>
            </div>
            <div>
              Empresa: <span className="blue">Br2Go</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
