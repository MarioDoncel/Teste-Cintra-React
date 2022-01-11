import React, {FormEvent, useState } from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import AlertMessage from '../../components/AlertMessage';
import { apiUsers } from '../../services/api';
import Input from '../../components/SignComponents/Input';
import SignHeader from '../../components/SignComponents/SignHeader';

import { SignInContainer } from './styles';


const SignIn: React.FC = () => {
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
 
  const handleClickLogIn =async (e:FormEvent)=>{
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const email = form.email.value
    const password = form.password.value
    if( !email || !password)  return popAlert('error', 'Preencha todos os campos.')
    
    try {
      const {data:JWT} = await apiUsers.get('/login', {auth:{
        username: email,
        password
      }})
      localStorage.setItem('@Devfast:JWT', JSON.stringify(JWT) )     
      navigate('/')
    } catch (error:any) {
      console.error(error)
      popAlert('error', error.response.data.message)
    }
  }

  return (
    <SignInContainer className='flex-center'>
      {showAlert && <AlertMessage type={alertMessage.type} alertMessage={alertMessage.message}/> }
      <SignHeader text={'Bem vindo de volta'} subText={'Não possui conta?'} action={'Registrar'} linkTo='/signup'/>
      <form action="" className='flex-center' onSubmit={(e)=>handleClickLogIn(e)}>
        <Input type='email' name='email' placeholder='user@host.com' Icon={MdOutlineMail} />
        <Input type={passwordOrText} name='password' placeholder='*********' Icon={RiLockPasswordLine} showHide={showHidePassword} /> 

        <input type='submit' value={'Entrar'}/>
      </form>
    </SignInContainer>
  );
}

export default SignIn;