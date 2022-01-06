/* eslint-disable jsx-a11y/img-redundant-alt */
import { AboutContainer } from './style';



export const About = () => {

  return (
    <AboutContainer>
      <div className="image flex-center">
        <img src="https://images.unsplash.com/photo-1608170825938-a8ea0305d46c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2luZW1hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Image About" />
      </div>
      <div className="about flex-center">
        <p>O Teste foi realizado com o desenvolvimento de um layout do zero contendo todas as funcionalidades propostas no teste.
        </p><br />
        <p>
          As tecnologias usadas foram: ReactJS, Redux, Redux-Saga, Axios, Styled-Components e CSS3 (usado em animações de loading).
        </p><br />
        <p>
          O código fonte desse projeto está no repositório:Teste Dev Reactdo GitHub.
        </p><br />
        <p>
          {'Espero que gostem :)'}
        </p>
      </div>

    </AboutContainer>
  );
}

