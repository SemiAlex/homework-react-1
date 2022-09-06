import ListGroup from 'react-bootstrap/ListGroup';
import ThemeContext from "../context/ThemeContext";
import React, { useContext, useEffect, useState } from 'react';

function AlertMessage() {
  const { alertText, setAlertText } = useContext(ThemeContext)
  const [alertArr, setAlertArr] = useState([])

  useEffect(()=>{
    setAlertArr([...alertArr, alertText])
  }, [alertText])

  useEffect(() => {
    const newAlertArr = alertArr.filter(el => el !== alertText)
    const timer = setTimeout(() => setAlertArr(newAlertArr), 1000);
    return () => clearTimeout(timer);
  }, [alertArr]);

  return <div style={{ position: 'fixed', bottom: '1rem', right: '1rem', zIndex: '1' }}>
    <ListGroup>
      {alertArr.map((el, index) => <ListGroup.Item key={index} variant='success'>{el}</ListGroup.Item>)}
    </ListGroup>
  </div> 
}

export default AlertMessage;