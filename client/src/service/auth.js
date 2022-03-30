import { Cookies } from 'react-cookie';

export default class AuthService {
  constructor(baseURL) {
    this.baseURL = baseURL;
    // this.tokenStorage = tokenStorage;
    this.cookies = new Cookies();
  }

  async getLoginDataName(id) {
    const response = await fetch(
      `${this.baseURL}/login/getLoginDataName?id=${id}`,
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          id,
        }),
      }
    );
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.message);
    } else {
      return data;
    }
  }

  async getLoginData(id, password) {
    const response = await fetch(
      `${this.baseURL}/login/getLoginData?id=${id}`,
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          id,
          password,
        }),
      }
    );

    const loginData = await response.json();

    if (response.status !== 200) {
      throw new Error(loginData.message);
    } else {
      // this.tokenStorage.saveToken(loginData.token);
      this.cookies.set('token', loginData.token);
      return loginData.data;
    }
  }

  async postLoginData(id, password, name, email, url) {
    const response = await fetch(`${this.baseURL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        password,
        name,
        email,
        url,
      }),
    });
    const result = await response.json();
    if (response.status !== 201) {
      throw new Error(result.message);
    }
    window.alert('You have created your ID!!');
    return result;
  }
}
