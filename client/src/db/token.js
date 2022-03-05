const TOKEN = "token";
const USER = "user";

export default class TokenStorage {
  saveToken(token) {
    localStorage.setItem(TOKEN, token);
  }

  saveId(id) {
    localStorage.setItem(USER, id);
  }

  getToken() {
    return localStorage.getItem(TOKEN);
  }

  clearToken() {
    localStorage.clear(TOKEN);
    localStorage.clear(USER);
  }
}
