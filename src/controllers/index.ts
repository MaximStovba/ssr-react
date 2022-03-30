import axios from "axios";
import setCookie from 'set-cookie-parser';

const __DATA__ = {
  ratingFieldName: 'rating',
  cursor: 0,
  limit: 5,
};

export const signInControllers = (request: any, response: any) => {
  axios
    .post('https://ya-praktikum.tech/api/v2/auth/signin', request.body, {
      withCredentials: true,
    })
    .then(res => {
      // @ts-ignore
      const cookies = setCookie.parse(res, {
        decodeValues: true, // default: true
      });
      cookies.forEach((cookieObject: any) =>
        response.cookie(cookieObject.name, cookieObject.value)
      );
      response.send(res.data);
    })
    .catch(err => {
      console.log(err);
      return err;
    });
}

export const logOutControllers = (request: any, response: any) => {
  axios
    .post('https://ya-praktikum.tech/api/v2/auth/logout', {}, {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        // @ts-ignore
        Cookie: request.headers.cookie ? request.headers.cookie : '',
      },
    })
    .then(res => {
      // @ts-ignore
      const cookies = setCookie.parse(res, {
        decodeValues: true, // default: true
      });
      cookies.forEach((cookieObject: any) =>
        response.cookie(cookieObject.name, cookieObject.value, {
          maxAge: 0,
          httpOnly: true,
        })
      );
      response.send(res.data);
    })
    .catch(err => {
      console.log(err);
      return err;
    });
}

export const leaderboardControllers = (request: any, response: any) => {
  axios
  .post('https://ya-praktikum.tech/api/v2/leaderboard/starship', __DATA__, {
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      // @ts-ignore
      Cookie: request.headers.cookie ? request.headers.cookie : '',
    },
  })
  .then(res => {
    response.send(res.data);
  })
  .catch(err => {
    console.log(err);
    return err;
  });
}
