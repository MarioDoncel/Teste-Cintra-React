/* eslint-disable jsx-a11y/img-redundant-alt */
import { AboutContainer } from './style';



export const About = () => {

  return (
    <AboutContainer>
      <div className="image flex-center">
        <img src="https://images.unsplash.com/photo-1608170825938-a8ea0305d46c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2luZW1hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Image About" />
      </div>
      <div className="about flex-center">
        <p>Teste realizado conforme requisitos passados em consultoria da DevFast no dia 04/01/2022. Layout criado no FIGMA (https://www.figma.com/file/o2t0P3q8aV6zHVEqnP7U1R/Untitled?node-id=0%3A1) com base na aplicação apresentada como exemplo. 
        </p><br />
        <p>
          Tecnologias utilizadas: ReactJS, ContextAPI,  Redux, Redux Toolkit, Styled Components, React Router V6, Axios, Typescript.
        </p><br />
        <p>
          Features: slider de imagens, destaque da pagina atual,paginação , filtro de filmes por categorias(uma ou varias)
        </p><br />
        <p>
          {'Espero que gostem :)'}
        </p>
      </div>

    </AboutContainer>
  );
}

