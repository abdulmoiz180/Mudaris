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
  const { data } = useLanguage();

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (!data) {
    return <h2>not loading</h2>;
  }

  return (
    <section className="width-90 faq-section">
      <Box component="div" className="faq-title-container column">
        <Typography variant="h6" className="clr-white inter faq-title">
          {data.faqTitle.title}
        </Typography>
        <Typography className="clr-white inter faq-subtitle">
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
                  className={`faq-number inter ${
                    expanded === index ? "purple" : "clr-white"
                  }`}
                >
                  {faq.index}
                </Typography>
              </span>
              <Typography
                className={`faq-question inter flex flex-center ${
                  expanded === index ? "purple" : "clr-white"
                }`}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="faq-answer-wrapper">
              <Typography className="gray">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
