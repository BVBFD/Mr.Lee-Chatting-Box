export default class AuthService {
  loginData = [
    {
      id: "lse126",
      password: "@securities126",
      name: "Lee Seong Eun",
      email: "lsevina126@gmail.com",
      url: "https://i.pinimg.com/474x/e2/2c/b9/e22cb965ccd406838b496358fd5d989a.jpg",
    },
  ];

  async getLoginData(id, password) {
    const data = this.loginData.find((data) => data.id === id);
    if (data.password === password) {
      return data;
    } else {
      return window.alert("잘못된 Password 입력 하셨습니다");
    }
  }

  async postLoginData(id, password, name, email, url) {
    const newData = {
      id: id,
      password: password,
      name: name,
      email: email,
      url: url,
    };
    this.loginData.push(newData);
    return window.alert("아이디가 생성되었습니다");
  }
}
