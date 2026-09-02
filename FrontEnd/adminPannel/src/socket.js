import { io } from "socket.io-client";

const socket = io("http://localhost:5000")
  // "https://new-wdu-healthsystem.onrender.com");

socket.on("connect", () => {
  console.log("Doctor connected:", socket.id);
});

export default socket;