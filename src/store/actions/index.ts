import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
const dataPost = {
  ratingFieldName: 'rating',
  cursor: 0,
  limit: 5,
};
export const fetchUsers =
  () => async (dispatch: any) => {
    const res = await axios.post(
      'https://ya-praktikum.tech/api/v2/leaderboard/starship',
      dataPost,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: FETCH_USERS,
      payload: res.data,
    });
  };
