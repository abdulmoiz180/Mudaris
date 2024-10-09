import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Tab,
  Tabs,
} from "@mui/material";
import "./PriceCard.css";
import Line from "../../../../assets/Icons/line.png";
import Tick from "../../../../assets/Icons/tick.png";

const PaymentScreen = ({ selectedPlan }) => {
  const [value, setValue] = useState("one");
  console.table(selectedPlan.planTitle);

  return (
    <section className="payment-screen flex">
      <main className="column checkout-section">
        <Typography className="clr-white inter fs-36" variant="h6">
          Checkout
        </Typography>

        <div className="checkout-info-wrapper g-20 column">
          <Typography className="clr-white inter fs-24-w-500 flex g-20">
            <span>1.</span>
            Contact Information
          </Typography>
          <Box className="checkout-fields flex">
            {contactInfo.map((f, i) => (
              <div key={i} className="column g-10">
                <label htmlFor={f.label} className="clr-white fs-16 inter">
                  {f.label}
                </label>
                <TextField
                  placeholder={f.placeholder}
                  type={f.type}
                  className="checkout-field"
                  sx={{ width: "380px" }}
                />
              </div>
            ))}
          </Box>

          <div className="payment-method-wrapper">
            <Typography className="clr-white inter fs-24-w-500 flex g-20">
              <span>2. </span>
              Payment Method
            </Typography>
            <div className="checkout-tab-container g-10 column">
              <Tabs
                value={value}
                onChange={(event, newval) => setValue(newval)}
                indicatorColor="secondary"
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#9855ff",
                  },
                }}
                aria-label="secondary tabs example"
              >
                <Tab
                  value="one"
                  sx={{
                    color: "white",
                    textTransform: "inherit",
                  }}
                  label="Debit / Credit Card"
                />
                <Tab
                  value="two"
                  sx={{
                    color: "white",
                    textTransform: "inherit",
                  }}
                  label="Payment with Crypto"
                />
              </Tabs>
              <Box mt={2} className="checkout-wrapper column g-20">
                {value === "one" ? (
                  <div className="debit-container flex">
                    {tabData.one.map((field, index) => (
                      <div
                        className="column payment-fields-container"
                        key={index}
                      >
                        <label
                          className="clr-white inter fs-16"
                          htmlFor={field.label}
                        >
                          {field.label}
                        </label>
                        <TextField
                          type={field.type}
                          fullWidth
                          margin="normal"
                          placeholder={field.placeholder}
                          InputLabelProps={{ className: "clr-white" }}
                          InputProps={{
                            style: {
                              color: "white",
                            },
                          }}
                          sx={{ width: "380px" }}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <Box
                    display="flex"
                    flexDirection="column"
                    className="crypto-container"
                  >
                    {tabData.two.map((field, index) => (
                      <div className="payment-fields-container crypto-fields">
                        <label className="clr-white inter fs-16" htmlFor="">
                          {field.label}
                        </label>
                        <TextField
                          key={index}
                          type={field.type}
                          defaultValue={field.value || ""}
                          fullWidth
                          placeholder={field.placeholder}
                          margin="normal"
                          InputLabelProps={{ className: "clr-white" }}
                          InputProps={{
                            style: {
                              color: "white",
                            },
                          }}
                        />
                      </div>
                    ))}
                  </Box>
                )}
                <Button variant="contained" className="checkout-btn">
                  Proceed
                </Button>
              </Box>
            </div>
          </div>
        </div>
      </main>

      <section>
        <Card className="plan-card checkout-plan-card">
          <CardContent>
            <Box className="checkout-card-upper">
              <Typography variant="h5" className="plan-heading fs-36 inter">
                {selectedPlan.planTitle}
              </Typography>
              <Typography variant="h6" className="plan-price fs-24-w-500 inter">
                {selectedPlan.price}
              </Typography>
              <img src={Line} className="linePic" alt="line separator" />
            </Box>
            <ul className="plan-perks">
              {selectedPlan.perks.map((perk, index) => (
                <Box className="perk flex inter" key={index}>
                  <img src={Tick} alt="Tick Icon" />
                  <li className="fs-18" key={index}>
                    {perk}
                  </li>
                </Box>
              ))}
            </ul>
          </CardContent>
          <Box className="ButtonDiv">
            <Button className="subscribe-button checkout-subscribe-btn">
              Subscribe
            </Button>
          </Box>
        </Card>
      </section>
    </section>
  );
};

export default PaymentScreen;

const contactInfo = [
  { label: "First Name", placeholder: "john", type: "text" },
  { label: "Last Name", placeholder: "doe", type: "text" },
  { label: "Phone Number", placeholder: "090978601", type: "tel" },
  { label: "Email Address", placeholder: "example@test.com", type: "email" },
];

const tabData = {
  one: [
    { label: "Name on Card", type: "text", placeholder: "Name on card" },
    { label: "Enter Card Number", type: "number", placeholder: "0000 0000 0000" },
    { label: "Valid Date", type: "text", placeholder: "MM/YY" },
    { label: "Security Code", type: "password", placeholder: "123" },
  ],
  two: [
    { label: "Pay With", type: "text", placeholder: "USDT (ERC-20)" },
    { label: "Send to this address", type: "text", value: "0x123...abc" },
    { label: "USDT (ERC-20) Amount to be received", type: "number", placeholder: "$999" },
  ],
};
