/* eslint-disable import/prefer-default-export */

export const ACTIONS = {
  GET_USER: 'GET_USER',
  SAVE: 'SAVE',
  RESET: 'RESET',
};

export function setUserSettings(payload: Record<string, any>) {
  return {
    type: ACTIONS.SAVE,
    payload,
  };
}

export function deleteUserSettings() {
  return {
    type: ACTIONS.RESET,
  };
}

export const getUserActions = () => async (dispatch: any, getState: any, axiosInstance: any) => {
  const res = await axiosInstance.get('/auth/user', {}, {
    withCredentials: true,
  });

  dispatch({
    type: ACTIONS.GET_USER,
    payload: res.data
  });
}
