import React, { InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import { InputContainer } from './styles';
import { BiHide, BiShow } from 'react-icons/bi';

interface IInput extends InputHTMLAttributes<HTMLInputElement>{
  Icon:IconType
  showHide?:()=>void
  label?:string
}

const Input= ({type, name, placeholder, Icon, showHide, label}:IInput) => {
  return (
    <InputContainer>
      <div className="field">
        <label htmlFor={name}>{label? label:name}</label>
        <input type={type} name={name} id={name} placeholder={placeholder} />
      </div>
      <div className="icons">
        {name === 'password'? (type === 'password'? <BiHide className='showHide' onClick={showHide}/>: <BiShow className='showHide' onClick={showHide}/> ): ''}
        <Icon/>
      </div>
    </InputContainer>
  );
}

export default Input;