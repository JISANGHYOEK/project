import React from "react";
import { useParams } from "react-router-dom";
import { faqs } from "./FAQData";
import FAQTable from "./FAQTable";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";

function FAQItem({ faq: propFaq }) {
  const { id } = useParams();

  const faq = propFaq ? propFaq : faqs.find((faq) => faq.id === Number(id));

  if (!faq) {
    return <div></div>;
  }

  return (
    <div>
      <HeaderComponent />
      <FAQTable faqs={faqs} />
      <FooterComponent />
    </div>
  );
}

export default FAQItem;
