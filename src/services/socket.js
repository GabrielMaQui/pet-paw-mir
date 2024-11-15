import io from "socket.io-client";

const socket = io("http://localhost:3000/", {transports: ['websocket'],});


socket.on("connect", () => {
  console.log("Connected to server");
});


export default socket;
