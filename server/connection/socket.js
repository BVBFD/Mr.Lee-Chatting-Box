import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import { config } from "../config.js";

export class Socket {
  constructor(server) {
    this.io = new Server(server, {
      cors: {
        origin: "*",
      },
    });

    this.io.use((socket, next) => {
      const token = socket.handshake.auth.token;
      if (!token) {
        return next(new Error("Authentication error"));
      }
      jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if (error) {
          return next(new Error("Authentication error!"));
        }
        next();
      });
    });

    this.io.on("connection", (socket) => {
      console.log("Socket client connected!");
    });
  }
}

let socket;
export function initSocketIO(server) {
  if (!socket) {
    socket = new Socket(server);
  }
}

export function getSocketIO() {
  if (!socket) {
    throw new Error("Please call init first!");
  }
  return socket.io;
}
