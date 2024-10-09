import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import { useLanguage } from "../../../../globalContext/GlobalProvider";
import "./faq.css";

export default function FAQ() {
  const [expanded, setExpanded] = useState(false);
  const { data, language } = useLanguage();

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (!data) {
    return <h2>not loading</h2>;
  }

  return (
    <section className="width-90 faq-section">
      <Box component="div" className="faq-title-container column">

        <Typography variant="h6" className={`${language === "persian" ? "clr-white faq-title rubik" : "clr-white faq-title inter"}`}>
          {data.faqTitle.title}
        </Typography>
        <Typography className={`${language === "persian" ? "clr-white faq-subtitle rubik" : "clr-white faq-subtitle inter"}`}>
          {data.faqTitle.description}
        </Typography>
      </Box>
      <div className="faq-container column">
        {data.faqArray.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleAccordionChange(index)}
            className="faq-wrapper column transparent"
          >
            <AccordionSummary
              expandIcon={
                expanded === index ? (
                  <CloseIcon className="purple" />
                ) : (
                  <AddIcon className="clr-white" />
                )
              }
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              className={`faq-question flex flex-center ${
                expanded === index ? "purple" : "clr-white"
              }`}
            >
              <span className="faq-number-container flex flex-center">
                <Typography
    className={`faq-number ${expanded === index ? "purple" : "clr-white"} ${
      language === "persian" ? "rubik" : "inter"
    }`}
                >
                  {faq.index}
                </Typography>
              </span>
              <Typography
  className={`faq-question flex flex-center ${
    expanded === index ? "purple" : "clr-white"
  } ${language === "persian" ? "rubik" : "inter"}`}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="faq-answer-wrapper">
              <Typography className={`${language === "persian" ? "gray rubik" : "gray inter"}`}>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
