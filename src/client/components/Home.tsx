// import axios from 'axios';
import React from 'react';

const Home = () => {
  function authUser() {
    // const data = {
    //   login: 'Maxim',
    //   password: 'Stovba1234',
    // };
    // axios
    //   .post('https://ya-praktikum.tech/api/v2/auth/signin', data, {
    //     withCredentials: true,
    //   })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  function LogOut() {
    // axios
    //   .post('https://ya-praktikum.tech/api/v2/auth/logout', {}, {
    //     withCredentials: true,
    //   })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  // function getUsers() {
  //   const data = {
  //     ratingFieldName: 'rating',
  //     cursor: 0,
  //     limit: 5,
  //   };
  //   axios
  //     .post('https://ya-praktikum.tech/api/v2/leaderboard/starship', data, {
  //       withCredentials: true,
  //     })
  //     .then(res => {
  //       console.log(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  return (
    <div>
      <br/>
      <div>Home!</div>
      <button onClick={() => authUser()}>SignIn!</button>
      <button onClick={() => LogOut()}>LogOut!</button>
    </div>
  );
};

export default {
  element: Home,
};
