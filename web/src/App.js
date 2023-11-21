import "./App.css";
import HeaderComponent from "./components/Header/Header";
import Sectioncomponent from "./components/Section/Section";
import FooterComponent from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Sectioncomponent />
      <div className="Footer">
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
