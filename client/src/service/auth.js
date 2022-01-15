export default class AuthService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async getLoginData(id, password) {
    const response = await fetch(`${this.baseURL}/login?id=${id}`, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const loginData = await response.json();
    if (response.status !== 200) {
      throw new Error("404 Id Not Found");
    } else {
      if (loginData.password === password) {
        return loginData;
      } else {
        return window.alert("잘못된 Password 입력 하셨습니다");
      }
    }
  }

  async postLoginData(id, password, name, email, url) {
    const response = await fetch(`${this.baseURL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        id,
        password,
        name,
        email,
        url,
      },
    });
    const result = await response.json();
    if (response.status !== 201) {
      throw new Error("500 Server not found");
    }
    window.alert("You have created your ID!!");
    return result;
  }
}
