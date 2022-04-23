// import axios from 'axios';
import React from 'react';
import axios from 'axios';
import { getUserActions } from 'store/actions/settings';

const Home = () => {
  function authUser() {
    const data = {
      login: 'smith',
      password: '12345678',
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
      .post(
        '/logout',
        {},
        {
          withCredentials: true,
        }
      )
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function getUsers() {
    axios
      .post(
        '/leaderboard',
        {},
        {
          withCredentials: true,
        }
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div>
      <br />
      <div>Home!</div>
      <button onClick={() => authUser()}>SignIn!</button>
      <button onClick={() => LogOut()}>LogOut!</button>
      <button onClick={() => getUsers()}>getLeader!</button>
    </div>
  );
};

function loadData(store: any) {
  return store.dispatch(getUserActions());
}

export default {
  element: Home,
  // loadData,
};
