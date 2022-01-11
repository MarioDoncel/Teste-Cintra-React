import { Link } from 'react-router-dom';

import { SignHeaderContainer } from './styles';

type TSignHeader = {
  text: string
  subText: string
  action: string
  linkTo:string
}



const SignHeader = ({ text, subText, action, linkTo }: TSignHeader) => {
  return (
    <SignHeaderContainer>
      <h1>{text}<span>.</span></h1>
      <p>{subText} <Link to={linkTo}><span>{action}</span></Link></p>
    </SignHeaderContainer>
    

  );
}

export default SignHeader;