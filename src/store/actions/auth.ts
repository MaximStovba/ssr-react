/* eslint-disable import/prefer-default-export */

export const AUTH_ACTIONS = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  REGISTER: 'REGISTER',
};

export function signInActions(payload: Record<string, any>) {
  return {
    type: AUTH_ACTIONS.LOGIN,
    payload,
  };
}

export function logOutActions() {
  return {
    type: AUTH_ACTIONS.LOGOUT,
  };
}

