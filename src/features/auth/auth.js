export const registerUser = (username) => {
  const userList = JSON.parse(localStorage.getItem("listUser")) || [];
  if (userList.includes(username)) {
    return { token: null, isRegister: false };
  }
  userList.push(username);
  localStorage.setItem("listUser", JSON.stringify(userList));
  const authenticationCode = Math.random().toString(36).substring(7);
  localStorage.setItem(username, authenticationCode);

  return { token: authenticationCode, isRegister: true };
};

export const loginUser = (username, token) => {
  const tokenFromStorage = localStorage.getItem(username);

  if (tokenFromStorage === token) {
    localStorage.setItem("currentUser", username);
    return { isLogin: true };
  } else {
    return { isLogin: false };
  }
};

export default { registerUser, loginUser };
