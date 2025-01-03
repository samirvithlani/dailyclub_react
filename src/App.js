import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header"; //export const... {Header} as object..
import Content from "./components/Content"; //export default Content as file...
import { Footer } from "./components/Footer";
import { Employee } from "./components/employee/Employee";
import { MapDemo } from "./components/MapDemo";
import { MapDemo2 } from "./components/MapDemo2";

function App() {
  // at time we can return only 1 tag.
  // every tag must have closing tag
  // whatever written in return statment will display to browser..

  var title ="React JS"

  return (
    <div className="App">
      <Header title = {title}></Header>
      {/* <MapDemo></MapDemo> */}
      <MapDemo2></MapDemo2>
      {/* <Employee title = {title}></Employee> */}
      {/* <Content></Content>
      <Footer></Footer> */}
    </div>
  );
}

export default App;
