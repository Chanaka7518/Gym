import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
      //top: 1800, left: 100, => window will be scrolled to a position on the page that is 1800 pixels from the top and 100 pixels from the left
    >
      <img src={Icon} alt="dumbell" style={{ width: "40px", height: "40px" }} />
      <Typography
        fontSize="24px"
        fontWeigt="bold"
        textTransform="capitalize"
        color="#3a1212"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
