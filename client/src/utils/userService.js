import {
  setToken,
  getUserFromToken,
  removeToken,
  getToken,
} from "./tokenService";

const BASE_URL = "/api/users/";

function signup(user) {
  return fetch(BASE_URL + "signup/", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error("Email already taken!");
    })
    .then(({ token }) => setToken(token));
}

function getUser() {
  return getUserFromToken();
}

function logout() {
  removeToken();
}

function login(creds) {
  return fetch(BASE_URL + "login/", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(creds),
  })
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error("Bad Credentials!");
    })
    .then(({ token }) => setToken(token));
}

async function myUserProfile(userID) {
  try {
    let res = await fetch(BASE_URL + userID + "/");
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

async function updateProfile(user, userID) {
  try {
    const token = getToken();
    let res = await fetch(BASE_URL + userID + "/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(user),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export { signup, getUser, logout, login, updateProfile, myUserProfile };
