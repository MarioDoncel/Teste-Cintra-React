import React, { ChangeEvent, useState } from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { HiOutlineUserCircle } from 'react-icons/hi';
import Input from '../../components/SignComponents/Input';
import SignHeader from '../../components/SignComponents/SignHeader';

import { SignUpContainer } from './styles';
import { apiUsers } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordOrText,setPasswordOrText] = useState('password')

  const showHidePassword = () => {
    if(passwordOrText === 'text') return setPasswordOrText('password')
    setPasswordOrText('text')
  }

  const handleOnChangeInput = (event:ChangeEvent, setData:React.Dispatch<React.SetStateAction<string>>)=>{
    const input = event.target as HTMLInputElement
    setData(input.value)
  }

  const handleClickCreateAccount =async ()=>{
    if(!username || !email || !password) alert('Preencha todos os campos')
    if(password.length < 4)alert('Passord deve conter no minimo 4 caracteres')

    try {
      const {data:JWT} = await apiUsers.post('/create', {username, email, password})
      localStorage.setItem('@Devfast:JWT', JSON.stringify(JWT) )
      navigate('/')
    } catch (error:any) {
      alert(error.response.data.message)
    }
  }

  return (
    <SignUpContainer className='flex-center'>
      <SignHeader text={'Bem vindo de volta'} subText={'Não possui conta?'} action={'Registrar'}/>
      
      <Input type='text' label='Nome Completo' name='name' placeholder='Nome Sobrenome' Icon={HiOutlineUserCircle} onChange={(event)=>handleOnChangeInput(event,setUsername)}/>

      <Input type='email' name='email' placeholder='user@host.com' Icon={MdOutlineMail} onChange={(event)=>handleOnChangeInput(event,setEmail)}/>
      
      <Input type={passwordOrText} name='password' placeholder='*********' Icon={RiLockPasswordLine} showHide={showHidePassword} onChange={(event)=>handleOnChangeInput(event,setPassword)}/> 

      <button onClick={handleClickCreateAccount}>Criar conta</button>
      
    </SignUpContainer>
  );
}

export default SignUp;