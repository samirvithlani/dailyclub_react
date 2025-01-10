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

function App() {
  // at time we can return only 1 tag.
  // every tag must have closing tag
  // whatever written in return statment will display to browser..

  var title ="React JS"

  return (
    <div className="App">
      <Header title = {title}></Header>
      {/* <MapDemo1></MapDemo1> */}
      {/* <MapDemo2></MapDemo2> */}
      <UseStateDemo></UseStateDemo>

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
