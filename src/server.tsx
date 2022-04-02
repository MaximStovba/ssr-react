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
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { auth } from 'middlewares/auth';
import {
  signInControllers,
  logOutControllers,
  leaderboardControllers,
} from 'controllers';
// pg
import { dbConnect } from './init';
import { User } from './init';
import { IUser } from './models/user';

// Создание пользователя
export async function createUser(firstName: string, lastName: string) {
  return User.create({ firstName, lastName });
}

// Обновление пользователя по ID
export async function updateUserById(id: number, data: IUser) {
  return User.update(data, { where: { id } });
}

// Удаление пользователя по ID
export async function deleteUserById(id: number) {
  return User.destroy({ where: { id } });
}

// Получение пользователя по ID
export async function getUserById(id: number) {
  return User.findOne({ where: { id } });
}

// Получение пользователей по ID
export async function getUsersByFirstName(firstName: string) {
  return User.findAll({ where: { firstName } });
}

dbConnect().then(async () => {
  /*
   *  Запуск приложения только после старта БД
   */

  // Создаем нового пользователя
  await createUser('Alex', 'Ivanov');
  // Получаем пользователей с именем Alex
  const users = await getUsersByFirstName('Alex');

  // Проверяем, найдены ли пользователи
  if (!users.length) {
    throw 'Not found';
  }

  // Получаем id первого пользователя
  const { id } = users[0];
  // Обновляем пользователя по ID
  await updateUserById(id, { firstName: 'Ivan', lastName: 'Ivanov' });

  // Ищем обновленного пользователя по id
  const findedUser = await getUserById(id);
  // Выводим в консоль найденного пользователя
  console.log('Finded user: ', findedUser);

  const app = express();
  app.use(cors());
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use('/signin', signInControllers);
  app.use('/logout', logOutControllers);

  app.use(auth);

  app.use('/leaderboard', leaderboardControllers);

  app.use(express.static('public'));
  app.get('*', (req, res, next) => {
    const store = createStore(req);

    const promises = matchRoutes(routes, req.url)?.map(({ route }) => {
      // const promises = routes.map((route) => {
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
});
