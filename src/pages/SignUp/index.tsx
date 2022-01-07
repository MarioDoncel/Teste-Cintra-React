import React, { useState } from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { HiOutlineUserCircle } from 'react-icons/hi';
import Input from '../../components/SignComponents/Input';
import SignHeader from '../../components/SignComponents/SignHeader';

import { SignUpContainer } from './styles';

const SignUp: React.FC = () => {
  const [passwordOrText,setPasswordOrText] = useState('password')

  const showHidePassword = () => {
    if(passwordOrText === 'text') return setPasswordOrText('password')
    setPasswordOrText('text')
  }
  return (
    <SignUpContainer className='flex-center'>
      <SignHeader text={'Bem vindo de volta'} subText={'Não possui conta?'} action={'Registrar'}/>
      
      <Input type='text' label='Nome Completo' name='name' placeholder='Nome Sobrenome' Icon={HiOutlineUserCircle}/>

      <Input type='email' name='email' placeholder='user@host.com' Icon={MdOutlineMail}/>
      
      <Input type={passwordOrText} name='password' placeholder='*********' Icon={RiLockPasswordLine} showHide={showHidePassword}/> 

      <button>Criar conta</button>
      
    </SignUpContainer>
  );
}

export default SignUp;