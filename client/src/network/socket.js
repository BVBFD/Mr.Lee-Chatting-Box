import socket from "socket.io-client";

export default class Socket {
  constructor(baseURL, token) {
    this.io = new socket(baseURL, {
      auth: (cb) => cb({ token }),
    });

    this.io.on("connect_error", (err) => {
      console.log("socket error", err.message);
    });
  }

  onSync(event, callback) {
    if (!this.io.connected) {
      this.io.connect();
    }

    this.io.on(event, (tweets) => callback(tweets));
    return () => this.io.off(event);
    // return 콜백함수 에 대한 이해 tip!
    // 만약 여기서 그냥 this.io.off가 되어 버리면
    // 그냥 그 값 자체가 전달 되기 때문에 onSync 트윗 교환이
    // 작동이 안됨...
    // (소켓 IO 네트워크 off 결과값 그 자체가 전달되었기 때문)

    // 그래서 return () => {} or return function () {}
    // 을 통해서 콜백함수를 전달하고 트윗 실시간 통신을 완료하고
    // 나중에 내가 원하는 시점에서 리턴했던 콜백함수를 호출할수 있는 의미임.
    // (영어 단어 그대로의 의미 callback(나중에 호출 할께) 그 의미 그 자체임!!)

    // 참고로 arrow function 은 그 해당 객체의 this 바인딩 하지 않음.
    // arrow function의 this는 항상 상위스코프의 this 임.

    // 하지만 일반 function 은 메소드, 생성자, 객체 내의 this는 그 생성자 객체를 가리킴.
    // 일반 function은 당연히 window를 가리킴.
  }
}
