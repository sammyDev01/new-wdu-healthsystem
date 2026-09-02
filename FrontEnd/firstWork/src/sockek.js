import { io } from "socket.io-client";

const socket = io("https://new-wdu-healthsystem.onrender.com")
  
  // "https://new-wdu-healthsystem.onrender.com");

socket.on("connect", () => {
  console.log("Patient connected:", socket.id);
});

export default socket;