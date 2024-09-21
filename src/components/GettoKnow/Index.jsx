import React from "react";
import { Box, Button, Divider, Typography, Container } from "@mui/material";
import "./get.css";
import { useLanguage } from "../../globalContext/GlobalProvider";
const GettoKnow = () => {
  const { language, data } = useLanguage();
  if (!data) return <div> data is loading..... </div>;
  const getData = data.gettoknow;
  return (
    <section className="GetToknowMainSection">
      <Box className="GetToknowMainContainer">
        <Box className="GetToknowContent">
          <img src={getData.img} />
          <Box className="GetToknowTextContent inter">
            <h2 className="inter">{getData.headtitle}</h2>
            <Box className="paraDivGettoKnow">
              <p className="inter">{getData.headdescription}</p>
              <p className="inter">{getData.headdescription2}</p>
            </Box>
            <Button className="dm-sans">{getData.buttonlabel}</Button>
          </Box>
        </Box>
        <Box className="GetToknowContentbelowContainer">
          <Box className="GetToknowTextContentbelow">
            <Box className="GetToknowTextContentbelowMainText">
              <h4 className="inter">{getData.transformtitle}</h4>
              <p className="inter">{getData.transformdescription}</p>
              <p className="inter">{getData.featuredline}</p>
            </Box>
          </Box>
          <Box className="GetToknowContentbelowLogoBox">
            {data.companylogos &&
              Object.values(data.companylogos).map((logo, key) => (
                <Box className="GetToknowContentbelowLogo">
                  <img key={key} src={logo} alt={`Company logo ${key}`} />
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
    </section>
  );
};
export default GettoKnow;
