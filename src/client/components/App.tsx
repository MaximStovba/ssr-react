import * as React from 'react';
import routes from '../Routes';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={Layout.element()}>
          {routes.map(({ path, element: C }) => (
            // @ts-ignore
            <Route key={path} path={path} element={<C />} />
          ))}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
