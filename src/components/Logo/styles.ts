import styled from 'styled-components';
import { ILogo } from '.';

export const LogoContainer = styled.div`
  background-color: ${({theme})=> theme.color.yellow};
  width: ${(props:ILogo) => props.width}px;
  height: ${(props:ILogo) => props.height}px;
  border-radius: 10px;
  

  img{
    width: 80%;
    object-fit: cover;
  }
`;
