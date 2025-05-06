// src/utils/isTokenExpired.js
import { jwtDecode } from "jwt-decode";

function isTokenExpired(token) {
  if (!token) return true;
  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  } catch (err) {
    console.log(err);
    return true; // invalid token
  }
};

export default isTokenExpired;