import { FETCH_USERS } from '../actions';

export default (state = [], action: any) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    default:
      return state;
  }
};
