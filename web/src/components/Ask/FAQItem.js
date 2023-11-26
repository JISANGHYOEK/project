import React from "react";
import { useParams } from "react-router-dom";
import { faqs } from "./FAQData";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import { Box, Container } from "@mui/material";
import FAQTable from "./FAQTable";

function FAQItem({ faq: propFaq }) {
  const { id } = useParams();

  const faq = propFaq ? propFaq : faqs.find((faq) => faq.id === Number(id));

  if (!faq) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HeaderComponent />
      <Container sx={{ height: "100%" }}>
        <Box
          sx={{
            display: "block",
            wordBreak: "break-all",
            fontSize: "1.75em",
            fontWeight: 400,
            textAlign: "left",
            background: "#f6f6f6",
            padding: "30px",
            marginBottom: "20px",
          }}
        >
          제목: {faq.question}
        </Box>
        <Box
          sx={{
            padding: "20px",
            background: "#ffffff",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            height: "100%",
            marginBottom: "10px",
          }}
        >
          {faq.answer}
        </Box>
      </Container>
      <FAQTable faqs={faqs} />
      <FooterComponent />
    </div>
  );
}

export default FAQItem;
