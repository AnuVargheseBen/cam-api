import { useRef } from "react";
import "./App.css";
import Camera from "./components/camera/camera";

function App() {
  const camRef = useRef({});

  function handleScreenshot(){
    console.log(camRef.current)
  }
  
  return (
    <div className="App">
      <img />
      
      <Camera ref={camRef} audio={false} videoConstraints={{ facingMode: "user" }} 
     />
     <button onClick={handleScreenshot}>click me dear</button>
    </div>
  );
}

export default App;
