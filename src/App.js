import Home from "./components/Home/home";
import Navbar from "./components/Navbar/navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DataFetch } from "./api/datafetch";

function App() {
  const dispatch = useDispatch();
 
  useEffect(()=>{
    dispatch(DataFetch());
  },[dispatch])

  return (
    <div className="App">
        <Navbar />
        <Home />
      </div>
  );
}

export default App;
