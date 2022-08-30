import Alert from 'react-bootstrap/Alert';
import './Alert.css'
import ThemeContext from "../context/ThemeContext";
import React, { useContext } from 'react';

function Message() {
  const { alertText } = useContext(ThemeContext)

  return <div className={`a ${alertText === '' ? 'd-none' : 'd-block'}`}>
    <Alert variant='success'>{alertText}</Alert>
  </div>
}

export default Message;