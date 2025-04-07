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
import { FormDemo1 } from "./components/forms/FormDemo1";
import { FormDemo2 } from "./components/forms/FormDemo2";
import { FormDemo3 } from "./components/forms/FormDemo3";
import { FormDemo4 } from "./components/forms/FormDemo4";
import { FormDemo5 } from "./components/forms/FormDemo5";
import { Data } from "./components/Data";
import { Login } from "./components/Login";
import { UseEffectDemo } from "./components/UseEffectDemo";
import { UseEffectDemo2 } from "./components/UseEffectDemo2";
import { FIndBomb1 } from "./components/FIndBomb1";
import DragonTigerGame from "./DragonTigerGame";
import { DragonTigerGameImpl } from "./components/DragonTigerGameImpl";
import MultiplierGame from "./components/MultiplierGame";
import { ApiDemo1 } from "./components/apis/ApiDemo1";
import { ApiDemo2 } from "./components/apis/ApiDemo2";
import { ApiDemo3 } from "./components/apis/ApiDemo3";
import { AddProduct } from "./components/apis/AddProduct";
import { FormDemo6 } from "./components/forms/FormDemo6";
import AviatorGame from "./components/AviatorGame";
import { Members } from "./components/Members";

function App() {
  // at time we can return only 1 tag.
  // every tag must have closing tag
  // whatever written in return statment will display to browser..

  var title ="React JS"

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<FIndBomb1/>}></Route>
        <Route path="/netflixhome" element={<NetflixHome/>}></Route>
        <Route path="/netflixshows" element={<NetflixShows/>}></Route>
        <Route path="/findbomb" element={<FindTheBombGame/>}></Route>
        <Route path="/play/:id" element = {<Play/>}></Route>
        <Route path="/formdemo1" element= {<FormDemo1/>}></Route>
        <Route path="/formdemo2" element= {<FormDemo3/>}></Route>
        <Route path="/formdemo4" element= {<FormDemo5/>}></Route>
        <Route path="/data" element ={<Data/>}></Route>
        <Route path="/login" element ={<Login/>}></Route>
        <Route path="/useeffect" element ={<UseEffectDemo2/>}></Route>
        <Route path="/findbomb1" element = {<FIndBomb1/>}></Route>
        <Route path="/dt" element = {<DragonTigerGame/>}></Route>
        <Route path="/dt2" element = {<DragonTigerGameImpl/>}></Route>
        <Route path="/mt" element = {<MultiplierGame/>}></Route>
        <Route path="/apidemo1" element = {<ApiDemo1/>}></Route>
        <Route path="/apidemo2" element = {<ApiDemo2/>}></Route>
        <Route path="/apidemo3" element = {<ApiDemo3/>}></Route>
        {/* <Route path="/*" element={<h1>Error</h1>}></Route> */}
        <Route path="/*" element ={<Error404/>}></Route>
        <Route path="/addproduct" element = {<FormDemo6/>}></Route>
        <Route path="/members" element = {<Members/>}></Route>
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
