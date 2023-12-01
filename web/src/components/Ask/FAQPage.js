import { useState, useEffect } from "react";
import axios from "axios";
import FAQTable from "./FAQTable";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import FAQItem from "./FAQItem";

function FAQPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/AskPage", { withCredentials: true })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <HeaderComponent />
      <FAQItem faqs={data} />
      <FAQTable faqs={data} />
      <FooterComponent />
    </div>
  );
}

export default FAQPage;
