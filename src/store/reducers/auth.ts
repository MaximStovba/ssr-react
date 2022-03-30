/* eslint-disable import/prefer-default-export */
import { AUTH_ACTIONS } from "store/actions/auth";
import { TPayload, TUserState } from "types";

const defaultState = {
  isLogined: false,
  signInError: '',
};

export function authReducer(state: TUserState = defaultState, { type, payload }: TPayload = {}) {
  switch (type) {
    // Авторизация
    case AUTH_ACTIONS.LOGIN:
      return {
        ...state,
        isLogined: payload.isLogined,
        signInError: payload.error,
      };

    // Выход
    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        isLogined: false,
      };

    // Регистрация
    case AUTH_ACTIONS.REGISTER:
      return {
        ...state,
        isRegistered: payload.isRegistered,
        signUpError: payload.error,
      };

    default: return state;
  }
}

// // Асинхронная авторизация
// export function logIn(loginData: TCredintials) {
//   return async (dispatch: Dispatch) => {
//     try {
//       await Auth.signIn(loginData)
//         .then((response) => {
//           // Если авторизация успешна
//           if (response.status === 200) {
//             dispatch({
//               type: ACTIONS.LOGIN,
//               payload: {
//                 isLogined: true,
//                 error: '',
//               },
//             });
//             return;
//           }

//           if (response.status === 400) {
//             dispatch(logOut() as any);
//             throw new Error('Юзер уже авторизован, и не должен попадать на эту страницу');
//           }

//           if (response.status === 401) {
//             dispatch({
//               type: ACTIONS.LOGIN,
//               payload: {
//                 isLogined: false,
//                 error: 'Неверные имя пользователя или пароль',
//               },
//             });
//             throw new Error('Неверные имя пользователя или пароль');
//           }
//         })
//         .then(() => Auth.getUserData()
//           .then((response) => {
//             if (response.status === 200) {
//               return response.data;
//             }

//             throw new Error('Ошибка при получении данных пользователя');
//           })
//           .then((userData) => {
//             dispatch(setUserSettings(userData));
//           }));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

// // Асинхронный выход
// export function logOut() {
//   return async (dispatch: Dispatch) => {
//     // Выполяем логаут
//     try {
//       await Auth.logOut();
//       dispatch(deleteUserSettings());
//       // Обновляем стейт
//       dispatch({
//         type: ACTIONS.LOGOUT,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

// // Асинхронная регистрация
// export function registerUser(userData: TCredintials) {
//   return async (dispatch: Dispatch) => {
//     try {
//       await Auth.signUp(userData)
//         .then((response) => {
//           if (response.status === 200) {
//             // Успешная регистрация
//             dispatch({
//               type: ACTIONS.REGISTER,
//               isRegistered: true,
//               signUpError: '',
//             });
//           }

//           if (response.status === 400) {
//             // FIXME: Авторизованый юзер не должен попадать в этот роут
//             dispatch(logOut() as any);
//             // Успешная регистрация
//             dispatch({
//               type: ACTIONS.REGISTER,
//               isRegistered: false,
//               signUpError: 'Ошибка при создании пользователя (уже авторизован)',
//             });
//           }

//           if (response.status === 409) {
//             dispatch({
//               type: ACTIONS.REGISTER,
//               isRegistered: false,
//               signUpError: 'Пользователь с таким имейлом уже существует',
//             });
//           }

//           return response.data;
//         }).then((parsedResponse) => {
//           console.log(parsedResponse);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }
