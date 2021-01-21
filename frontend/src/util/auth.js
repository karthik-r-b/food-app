const TOKEN_KEY = 'jwtToken';

export const login = (data, permission) => {
  localStorage.setItem(TOKEN_KEY, data);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }
  return false;
};
