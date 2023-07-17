import logo from './logo.svg';
import './App.css';
import { io } from "socket.io-client";
import {useEffect} from 'react'
function App() {
  var socket = io("http://localhost:5000");
  
  useEffect(() => {
    // To take data
    socket.on("vishal",(data)=>{console.log("DATA From Vishal backend",data)})
    // To send data
    // socket.emit("vishal",{desc:"vishal frontend"})
    // socket.on("sharma",(data)=>{console.log("DATA From Sharma backend",data)})
    // To send data
    // socket.emit("sharma",{desc:"sharma frontend"})
  }, [])

  return (
    <div className="App">
      <h4>SOCKET EMIT</h4>
    </div>
  );
}

export default App;
