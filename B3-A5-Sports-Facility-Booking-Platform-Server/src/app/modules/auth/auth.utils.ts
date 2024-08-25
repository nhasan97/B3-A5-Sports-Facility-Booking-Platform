import jwt from 'jsonwebtoken';

//function for generating JWT tokens
export const generateToken = (
  jwtPayload: { id: string; email: string; role: string },
  secret: string,
  expiresIn: string,
) => {
  const token = jwt.sign(jwtPayload, secret, {
    expiresIn,
  });

  return token;
};
