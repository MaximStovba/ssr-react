import 'babel-polyfill';
import React from 'react';
import express from 'express';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import routes from './client/Routes';
import createStore from './store/createStore';
import { matchRoutes } from 'react-router-dom';
import App from 'client/components/App';
import cors from 'cors';
import axios from 'axios';
import setCookie from 'set-cookie-parser';

const app = express();
app.use(cors());
app.use('/signin', (request, response) => {
    const data = {
      login: 'Maxim',
      password: 'Stovba1234',
    };
    axios
      .post('https://ya-praktikum.tech/api/v2/auth/signin', data, {
        withCredentials: true,
      })
      .then(res => {
        // @ts-ignore
        const cookies = setCookie.parse(res, {
          decodeValues: true  // default: true
        });
        console.log(cookies);
        cookies.forEach((cookieObject: any) => response.cookie(cookieObject.name, cookieObject.value)) // { maxAge: 0, httpOnly: true }
        response.send(res.data);
      })
      .catch(err => {
        console.log(err);
        return err;
      });
})

app.use('/logout', (request, response) => {
  const data = {};
  axios
    .post('https://ya-praktikum.tech/api/v2/auth/logout', data, {
      withCredentials: true,
      headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json',
        // @ts-ignore
        'Cookie': request.headers.cookie }
    })
    .then(res => {
      // @ts-ignore
      const cookies = setCookie.parse((res), {
        decodeValues: true  // default: true
      });
      console.log(cookies);
      cookies.forEach((cookieObject: any) => response.cookie(cookieObject.name, cookieObject.value, { maxAge: 0, httpOnly: true }))
      response.send(res.data);
    })
    .catch(err => {
      console.log(err);
      return err;
    });
})

app.use('/leaderboard', (request, response) => {
  const data = {
    ratingFieldName: 'rating',
    cursor: 0,
    limit: 5,
  };
  axios
    .post('https://ya-praktikum.tech/api/v2/leaderboard/starship', data,{
      withCredentials: true,
      headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json',
        // @ts-ignore
        'Cookie': request.headers.cookie ? request.headers.cookie : '' }
    })
    .then(res => {
      response.send(res.data);
      // TODO: добавить обработку ошибки 401
    })
    .catch(err => {
      console.log(err);
      response.send(err);
    });
})
app.use(express.static('public'));
app.get('*', (req, res, next) => {
  const store = createStore(req);

  const promises = matchRoutes(routes, req.path)?.map(({ route }) => {
    // @ts-ignore
    return route.loadData ? route.loadData(store) : null;
  });

  promises &&
    Promise.all(promises)
      .then(() => {
        const content = renderToString(
          <Provider store={store}>
            <StaticRouter location={req.url}>
              <App />
            </StaticRouter>
          </Provider>
        );

        res.send(`
        <html>
          <head></head>
          <body>
            <div id="root">${content}</div>
            <script>
              window.INITIAL_STATE = ${serialize(store.getState())}
            </script>
            <script src="bundle.js"></script>
          </body>
        </html>
      `);
      })
      .catch(next);
});

app.listen(3000, () => {
  console.log('Listening on prot 3000');
});
