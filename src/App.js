import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header"; //export const... {Header} as object..
import Content from "./components/Content"; //export default Content as file...
import { Footer } from "./components/Footer";

function App() {
  // at time we can return only 1 tag.
  // every tag must have closing tag
  // whatever written in return statment will display to browser..

  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
