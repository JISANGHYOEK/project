// FAQItem.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { faqs } from "./FAQData";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import { Box } from "@mui/material";

function FAQItem({ faq: propFaq }) {
  // const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();

  // id 파라미터에 해당하는 FAQ 항목찾기
  const faq = propFaq ? propFaq : faqs.find((faq) => faq.id === Number(id));
  // const toggleOpen = () => setIsOpen(!isOpen);

  if (!faq) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HeaderComponent />
      <Box>{faq.question}</Box>
      <Box>{faq.answer}</Box>
      <FooterComponent />
    </div>
  );
}

export default FAQItem;
