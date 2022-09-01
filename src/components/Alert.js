import Alert from 'react-bootstrap/Alert';
import './Alert.css'
import ThemeContext from "../context/ThemeContext";
import React, { useContext } from 'react';

function Message() {
  const { alertText } = useContext(ThemeContext)

  return alertText === '' ? '' : <div className='alert-class'>
    <Alert variant='success'>{alertText}</Alert>
  </div>
}

export default Message;