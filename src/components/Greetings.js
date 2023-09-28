import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Greetings() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/greetings/index').then((response) => {
      setMessage(response.data.message);
    }).catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <br />
      <p>{message}</p>
    </div>
  );
}

export default Greetings;
