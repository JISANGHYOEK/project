import FAQTable from "./FAQTable";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import { Box } from "@mui/material";

function FAQPage({ faqs }) {
  return (
    <div>
      <HeaderComponent />
      <Box
        sx={{
          display: "flex",
          wordBreak: "break-all",
          fontSize: "1.75em",
          fontWeight: 400,
          textAlign: "left",
          padding: "20px",
          background: "none",
          borderBottom: "2px solid black",
          width: "65%",
          marginLeft: "200px",
          marginTop: "50px",
          marginBottom: "20px",
        }}
      >
        1대1 문의내역
      </Box>
      <FAQTable faqs={faqs} />
      <FooterComponent />
    </div>
  );
}

export default FAQPage;
