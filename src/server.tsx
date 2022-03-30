import 'babel-polyfill';
import React from 'react';
import express from 'express';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import routes from './client/Routes';
import createStore from './store/createStore';
// import { matchRoutes } from 'react-router-dom';
import App from 'client/components/App';
import cors from 'cors';
import axios from 'axios';
import setCookie from 'set-cookie-parser';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/signin', (request, response) => {
  axios
    .post('https://ya-praktikum.tech/api/v2/auth/signin', request.body, {
      withCredentials: true,
    })
    .then(res => {
      // @ts-ignore
      const cookies = setCookie.parse(res, {
        decodeValues: true, // default: true
      });
      cookies.forEach((cookieObject: any) =>
        response.cookie(cookieObject.name, cookieObject.value)
      );
      response.send(res.data);
    })
    .catch(err => {
      console.log(err);
      return err;
    });
});

app.use('/logout', (request, response) => {
  axios
    .post('https://ya-praktikum.tech/api/v2/auth/logout', {}, {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        // @ts-ignore
        Cookie: request.headers.cookie ? request.headers.cookie : '',
      },
    })
    .then(res => {
      // @ts-ignore
      const cookies = setCookie.parse(res, {
        decodeValues: true, // default: true
      });
      cookies.forEach((cookieObject: any) =>
        response.cookie(cookieObject.name, cookieObject.value, {
          maxAge: 0,
          httpOnly: true,
        })
      );
      response.send(res.data);
    })
    .catch(err => {
      console.log(err);
      return err;
    });
});

const data = {
  ratingFieldName: 'rating',
  cursor: 0,
  limit: 5,
};

app.use('/leaderboard', (request, response) => {
  axios
    .post('https://ya-praktikum.tech/api/v2/leaderboard/starship', data, {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        // @ts-ignore
        Cookie: request.headers.cookie ? request.headers.cookie : '',
      },
    })
    .then(res => {
      response.send(res.data);
    })
    .catch(err => {
      console.log(err);
      return err;
    });
});

app.use(express.static('public'));
app.get('*', (req, res, next) => {
  const store = createStore(req);

  console.log(req.get('cookie'));

  // const promises = matchRoutes(routes, req.url)?.map(({ route }) => {
  const promises = routes.map((route) => {
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
