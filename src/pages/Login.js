 import React from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
   function handleClick(e) {
     e.preventDefault();
     console.log('По ссылке кликнули.');
   }
 
   return (
     <a href="#" onClick={handleClick}>
       Login
     </a>
   );
 }
