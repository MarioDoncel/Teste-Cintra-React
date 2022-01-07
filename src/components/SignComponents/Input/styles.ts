import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 50vw;
  background-color: #2CA0B5;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 400ms ease-in-out;
  :focus-within{
    background: #75949A;
    box-shadow: inset 0px 0px 0px 2px ${({theme})=>theme.color.yellow};
    
  }
  .field{
    display: flex;
    flex-direction: column;
    label{
      font-size: 1rem;
      color: #e5e5e595;
      padding-bottom: 0.3rem;
      text-transform: capitalize;
    }
    input{
      max-width: 40vw;
      background: transparent;
      font-size: 1.5rem;
      color: #fff;
      ::placeholder{
        color: rgba(255,255,255,0.4);
      }
    }
  }
  svg{
    font-size: 2rem;
  }
  .icons{
    display: flex;
  }
  .showHide{
    cursor: pointer;
    margin-right: 1rem;
  }

  @media (max-width: 600px){
    width: 60vw;
    .showHide{
    
    margin-right: 0.5rem;
  }
  }
`;
