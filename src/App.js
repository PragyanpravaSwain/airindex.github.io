import logo from "./logo.svg";
import "./App.css";
import TopBar from "./topBar/TopBar";
import Head from "./head/Head";
import Body from "./body/Body";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Head />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
