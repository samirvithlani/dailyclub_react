import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header"; //export const... {Header} as object..
import Content from "./components/Content"; //export default Content as file...
import { Footer } from "./components/Footer";
import { Employee } from "./components/employee/Employee";
import { MapDemo } from "./components/MapDemo";

import { Student } from "./components/student/Student";
import { Sales } from "./components/sales/Sales";
// import { UsestateDemo } from "./components/UsestateDemo";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { UseStatedemo3 } from "./components/UseStatedemo3";
import { MapDemo1 } from "./components/harshika/MapDemo1";
import { MapDemo2 } from "./components/harshika/MapDemo2";
import { UseStateDemo } from "./components/harshika/UseStateDemo";
import { Employees } from "./components/harshika/Employees";
import { InputHandling } from "./components/input/InputHandling";
import { Products } from "./components/input/Products";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./components/netflix/NetflixHome";
import { NetflixShows } from "./components/netflix/NetflixShows";
import { NetflixDashboard } from "./components/netflix/NetflixDashboard";
import { Error404 } from "./components/Error404";
import FindTheBombGame from "./components/FindTheBombGame";
import { Play } from "./components/netflix/Play";

function App() {
  // at time we can return only 1 tag.
  // every tag must have closing tag
  // whatever written in return statment will display to browser..

  var title ="React JS"

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<NetflixDashboard/>}></Route>
        <Route path="/netflixhome" element={<NetflixHome/>}></Route>
        <Route path="/netflixshows" element={<NetflixShows/>}></Route>
        <Route path="/findbomb" element={<FindTheBombGame/>}></Route>
        <Route path="/play/:id" element = {<Play/>}></Route>
        {/* <Route path="/*" element={<h1>Error</h1>}></Route> */}
        <Route path="/*" element ={<Error404/>}></Route>
      </Routes>
      {/* <Header title = {title}></Header> */}
      {/* <InputHandling/> */}
      {/* <Products></Products> */}
      {/* <MapDemo1></MapDemo1> */}
      {/* <MapDemo2></MapDemo2> */}
      {/* <UseStateDemo title = {title}></UseStateDemo> */}
      {/* <Employees title ={title}></Employees> */}

      {/* <UsestateDemo></UsestateDemo> */}
      {/* <UseStateDemo2></UseStateDemo2> */}
      {/* <UseStatedemo3></UseStatedemo3> */}
      {/* <Student></Student> */}
      {/* <Sales></Sales> */}
      {/* <MapDemo></MapDemo> */}
      {/* <MapDemo2></MapDemo2> */}
      {/* <Employee title = {title}></Employee> */}
      {/* <Content></Content>
      <Footer></Footer> */}
    </div>
  );
}

export default App;
