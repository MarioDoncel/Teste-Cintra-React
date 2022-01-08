import React from 'react';

import { AlertMessageContainer } from './styles';

interface IAlertMessage {
    type:string;
    alertMessage:string;
}

const AlertMessage = ({type, alertMessage}:IAlertMessage) => {
  
  return (
  <AlertMessageContainer className={type} >
      {alertMessage}
  </AlertMessageContainer>
);
}

export default AlertMessage;