import React, { HTMLAttributes } from 'react';
import { shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hooks';
import { apiUsers } from '../../services/api';
import { logout } from '../../store/user.store';
import Logo from '../Logo';
import NavLinks from './NavLinks';

import { HeaderContainer } from './styles';




const Header = ({onClick}:HTMLAttributes<HTMLDivElement>) => {
  const {user} = useAppSelector(state => state.currentUser, shallowEqual)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleLogout = () => {
    apiUsers.put('logout')
    dispatch(logout())
    navigate('/signin')
  }
  
     return (
        <HeaderContainer onClick={onClick}>
          <div className="container">
            <Logo/>
            { user.username ? (<div className="user">
                        <span>Olá,</span>
                        <h2>{user.username}</h2>
                      </div>): ''}
            <NavLinks user={user} onClick={handleLogout}/>
          </div>
        </HeaderContainer>
    )
}

export default Header;