import { io } from "socket.io-client";

const socket = io("https://new-wdu-healthsystem-1.onrender.com");

socket.on("connect", () => {
  console.log("Patient connected:", socket.id);
  
});

export default socket;