import React, { useState } from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';

import Input from '../../components/SignComponents/Input';
import SignHeader from '../../components/SignComponents/SignHeader';

import { SignInContainer } from './styles';

const SignIn: React.FC = () => {
  const [passwordOrText,setPasswordOrText] = useState('password')

  const showHidePassword = () => {
    if(passwordOrText === 'text') return setPasswordOrText('password')
    setPasswordOrText('text')
  }


  return (
    <SignInContainer className='flex-center'>
      <SignHeader text={'Bem vindo de volta'} subText={'Não possui conta?'} action={'Registrar'}/>
      
      <Input type='email' name='email' placeholder='user@host.com' Icon={MdOutlineMail}/>
      <Input type={passwordOrText} name='password' placeholder='*********' Icon={RiLockPasswordLine} showHide={showHidePassword}/> 

      <button>Entrar</button>
      
    </SignInContainer>
  );
}

export default SignIn;