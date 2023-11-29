import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/Header/Header";
import Sectioncomponent from "./components/Section/Section";
import FooterComponent from "./components/Footer/Footer";
import LoginPage from "./components/LoginPage/LoginPage";
import TermsAgreePage from "./components/SignupPage/TermsAgreePage";
import SignupPage from "./components/SignupPage/SignupPage";
import MainPage from "./components/MainPage/MainPage";
import TermsPage from "./components/Footer/TermsPage";
import PersonalPage from "./components/Footer/PersonalPage";
import CscPage from "./components/Csc/CscPage";
import MainCscPage from "./components/Csc/MainCscPage";
import VipPage from "./components/Vip/VipPage";
import AskPage from "./components/Ask/AskPage";

import FAQPage from "./components/Ask/FAQPage";
import FAQItem from "./components/Ask/FAQItem";
import { faqs } from "./components/Ask/FAQData";

import FreeRePage from "./components/FreeRe/FreeRePage";
import FreeReViewPage from "./components/FreeRe/FreeReViewPage";
import FreeReWritePage from "./components/FreeRe/FreeReWritePage";
import { FreeReDatas } from "./components/FreeRe/FreeReData";

function LandingPage() {
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/TermsAgree" element={<TermsAgreePage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/TermsPage" element={<TermsPage />} />
        <Route path="/PersonalPage" element={<PersonalPage />} />
        <Route path="/CscPage" element={<CscPage />} />
        <Route path="/MainCscPage" element={<MainCscPage />} />
        <Route path="/AskPage" element={<AskPage />} />
        <Route path="/faq" element={<FAQPage faqs={faqs} />} />
        <Route path="/faq/:id" element={<FAQItem />} />
        <Route path="/VipPage" element={<VipPage />} />
        <Route
          path="/FreeRePage"
          element={<FreeRePage FreeReDatas={FreeReDatas} />}
        />
        <Route path="/FreeRePage/:FreeRePageID" element={<FreeReViewPage />} />
        <Route
          path="/FreeRePage/FreeReWritePage"
          element={<FreeReWritePage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
