export const auth = (req: any, res: any, next: any) => {

  const uuid = req.cookies && req.cookies.uuid ? req.cookies.uuid : null;

  console.log(uuid);

  // if (!uuid) {
  //   return res
  //     .status(401)
  //     .send({ message: 'Необходима авторизация' });
  // }

  next(); // пропускаем запрос дальше

  return null;
}
