import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Container,
} from "@mui/material";
import { useLanguage } from "../../globalContext/GlobalProvider";
import "./PriceCard.css";
import Line from "../../assets/Icons/line.png";
import Tick from "../../assets/Icons/tick.png";

export const PriceCards = () => {
  const { data, language } = useLanguage();
  const paymentPlans = data[5];

  return (
    <Container className="price-container">
      <Box className="text-container">
        <Typography variant="h1" className="plan-title inter">
          {paymentPlans[0].title}
        </Typography>
        <Typography variant="body1" className="plan-description inter">
          {paymentPlans[0].description}
        </Typography>
      </Box>
      <Box className="card-wrapper">
        {paymentPlans.slice(1, 4).map((plan, index) => (
          <Card
            key={index}
            className={`plan-card ${
              language === "english" ? `align-right` : `align-left`
            }`}
          >
            <CardContent>
              <Box className="plan-upper">
                <Typography variant="h5" className="plan-heading inter">
                  {plan[`plan${index + 1}`]}
                </Typography>
                <Typography variant="h6" className="plan-price inter">
                  {plan.price}
                </Typography>
                <img src={Line} className="linePic" alt="line separator" />
              </Box>
              <ul className="plan-perks">
                {[
                  plan.perk1,
                  plan.perk2,
                  plan.perk3,
                  plan.perk4,
                  plan.perk5,
                  plan.perk6,
                ]
                  .filter(Boolean)
                  .map((perk, perkIndex) => (
                    <Box className="perk flex inter" key={perkIndex}>
                      <img src={Tick} alt="Tick Icon" />
                      <li>{perk}</li>
                    </Box>
                  ))}
              </ul>
            </CardContent>
            <Box className="ButtonDiv">
              <Button className="subscribe-button">
                {paymentPlans[4].subscribe}
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default PriceCards;
