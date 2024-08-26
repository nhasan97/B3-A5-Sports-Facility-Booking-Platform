export type TUser = {
  id: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
};

export type TAuthState = {
  user: null | TUser;
  token: null | string;
};

export type TLoginInfo = {
  email: string;
  password: string;
};
