/* eslint-disable import/prefer-default-export */

export const ACTIONS = {
  TOGGLE_MODE: 'TOGGLE_MODE',
  GEOLOCATION: 'GEOLOCATION',
  GET_LEADER: 'GET_LEADER',
};

export function toggleColorTheme() {
  return {
    type: ACTIONS.TOGGLE_MODE,
  };
}

export function setGeolocation(payload: Record<string, any>) {
  return {
    type: ACTIONS.GEOLOCATION,
    payload,
  };
}

export function getLeader(payload: Record<string, any>) {
  return {
    type: ACTIONS.GET_LEADER,
    payload,
  };
}
