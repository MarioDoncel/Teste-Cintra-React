import { Link } from 'react-router-dom';

import { SignHeaderContainer } from './styles';

type TSignHeader = {
  text: string
  subText: string
  action: string
}



const SignHeader = ({ text, subText, action }: TSignHeader) => {
  return (
    <SignHeaderContainer>
      <h1>{text}<span>.</span></h1>
      <p>{subText} <Link to={'/signup'}><span>{action}</span></Link></p>
    </SignHeaderContainer>
    

  );
}

export default SignHeader;