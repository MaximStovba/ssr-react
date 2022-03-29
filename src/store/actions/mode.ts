/* eslint-disable import/prefer-default-export */
import axios from 'axios';

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

export const getLeader = () => async (dispatch: any) => {
  const res = await axios.post('/leader', {}, {
    withCredentials: true,
  });

  dispatch({
    type: ACTIONS.GET_LEADER,
    payload: res.data
  });
}

