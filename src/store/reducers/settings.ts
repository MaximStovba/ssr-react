// eslint-disable-next-line import/prefer-default-export
import { ACTIONS } from 'store/actions/settings';
import { TProfileData } from 'types';

const defaultState: TProfileData = {
  first_name: '',
  second_name: '',
  login: '',
  email: '',
  phone: '',
  avatar: '',
  display_name: '',
  id: '',
};

export function settingsReducer(state: TProfileData = defaultState, { type, payload }: Record<string, any> = {}) {
  switch (type) {
    case ACTIONS.GET_USER:
      return {
        ...state,
        ...payload,
      };
    case ACTIONS.SAVE:
      return {
        ...state,
        ...payload,
      };
    case ACTIONS.RESET:
      return {
        state: defaultState,
      };
    default:
      return state;
  }
}
