
import Login from "./Components/Login";
import './App.css';
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar"
import{BrowserRouter,Route,Routes} from "react-router-dom";
function App(){
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>

    <Routes>
<Route path="/" element={<Login />}></Route>
<Route path="/Signup" element={<Signup />}></Route>



    </Routes>
    </BrowserRouter>
    
    
    
    </>
  );
}
// import Navbar from './Components/Navbar';
// import Form from './Components/Form';
// import Description from './Components/Description';
// function App() {
//   return (
//     <>
//     <div>
//       <Navbar title="navbar from"/>
//       <Navbar title="card from"/>     
//       <Navbar title=" desvription"/>
//     </div>
//     </>
//   )
    
// }

export default App;
