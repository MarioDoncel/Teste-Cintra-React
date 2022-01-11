import React, {FormEvent, useState } from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { HiOutlineUserCircle } from 'react-icons/hi';
import Input from '../../components/SignComponents/Input';
import SignHeader from '../../components/SignComponents/SignHeader';

import { SignUpContainer } from './styles';
import { apiUsers } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import AlertMessage from '../../components/AlertMessage';

const SignUp: React.FC = () => {
  const navigate = useNavigate()
  const [passwordOrText,setPasswordOrText] = useState('password')
  const [alertMessage,setAlertMessage] = useState({type:'', message:''})
  const [showAlert,setShowAlert] = useState(false)
  
  const popAlert = (type:string, message:string) => {
    setAlertMessage({type:type, message:message})
    setShowAlert(true)
    setTimeout(()=>setShowAlert(false),4000)
  }

  const showHidePassword = () => {
    if(passwordOrText === 'text') return setPasswordOrText('password')
    setPasswordOrText('text')
  }

  // const handleOnChangeInput = (event:ChangeEvent, setData:React.Dispatch<React.SetStateAction<string>>)=>{
  //   const input = event.target as HTMLInputElement
  //   setData(input.value)
  // }
  
  const handleSubmitCreateAccount =async (e:FormEvent)=>{
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const email = form.email.value
    const username = form.username.value
    const password = form.password.value
    if(!username || !email || !password) return popAlert('error', 'Todos os campos devem ser preenchidos')
    if(password.length < 4) return popAlert('error', 'Senha deve conter no minimo 4 caracteres')

    try {
      const {data:JWT} = await apiUsers.post('/create', {username, email, password})
      localStorage.setItem('@Devfast:JWT', JSON.stringify(JWT) )
      navigate('/')
    } catch (error:any) {
      popAlert('error',error.response.data.message)
    }
  }

  return (
    <SignUpContainer className='flex-center'>
      {showAlert && <AlertMessage type={alertMessage.type} alertMessage={alertMessage.message}/> }
      <SignHeader text={'Crie sua conta'} subText={'Já possui conta?'} action={'Entrar'} linkTo='/signin'/>
      <form className='flex-center' action='' onSubmit={handleSubmitCreateAccount}>
        <Input type='text' label='Nome Completo' name='username' placeholder='Nome Sobrenome' Icon={HiOutlineUserCircle} />

        <Input type='email' name='email' placeholder='user@host.com' Icon={MdOutlineMail} />
        
        <Input type={passwordOrText} name='password' placeholder='*********' Icon={RiLockPasswordLine} showHide={showHidePassword} /> 

        <input type='submit' value='Criar conta'/>
      </form>
    </SignUpContainer>
  );
}

export default SignUp;