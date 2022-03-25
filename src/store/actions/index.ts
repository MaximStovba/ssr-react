export const FETCH_USERS = 'FETCH_USERS';
const dataPost = {
  ratingFieldName: 'rating',
  cursor: 0,
  limit: 5,
};
export const fetchUsers =
  () => async (dispatch: any, getState: any, axiosInstance: any) => {
    const res = await axiosInstance.post(
      '/api/v2/leaderboard/starship',
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
