import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { settingsReducer } from './settings';
import { gameReducer } from './game';
import { modeReducer } from './mode';

export const rootReducer = combineReducers({
  auth: authReducer,
  settings: settingsReducer,
  game: gameReducer,
  mode: modeReducer,
});

export type RootState = ReturnType<typeof rootReducer>
