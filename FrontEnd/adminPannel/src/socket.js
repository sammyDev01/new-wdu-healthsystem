import { io } from "socket.io-client";

const socket = io("https://new-wdu-healthsystem-1.onrender.comom");

socket.on("connect", () => {
  console.log("Doctor connected:", socket.id);
});

export default socket;