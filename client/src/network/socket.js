import socket from 'socket.io-client';
import { Cookies } from 'react-cookie';

export default class Socket {
  constructor(baseURL) {
    this.cookies = new Cookies();

    this.io = new socket(baseURL, {
      auth: (cb) => cb({ token: this.cookies.get('token') }),
    });

    this.io.on('connect_error', (err) => {
      console.log('socket error', err.message);
    });
  }

  onSync(event, callback) {
    if (!this.io.connected) {
      this.io.connect();
    }

    this.io.on(event, (tweets) => callback(tweets));
    return () => this.io.off(event);
  }
}
