// import axios from 'axios';
import React from 'react';
import axios from 'axios';

const Home = () => {
  function authUser() {
    const data = {
      login: 'Maxim',
      password: 'Stovba1234',
    };
    axios
      .post('/signin', data, {
        withCredentials: true,
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function LogOut() {
    axios
      .post('/logout', {}, {
        withCredentials: true,
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function getUsers() {
    axios
      .post('/leader', {}, {
        withCredentials: true,
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div>
      <br/>
      <div>Home!</div>
      <button onClick={() => authUser()}>SignIn!</button>
      <button onClick={() => LogOut()}>LogOut!</button>
      <button onClick={() => getUsers()}>getUsers!</button>
    </div>
  );
};

export default {
  element: Home,
};
