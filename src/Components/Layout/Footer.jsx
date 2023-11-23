import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              corsor: "ponter",
              mr: "2",
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translatex(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icon */}
          <InstagramIcon />
          <WhatsAppIcon />
          <Link to="https://github.com/vaishalimore855/">
          <GitHubIcon />
          </Link>
          
          <Link to="https://www.linkedin.com/in/vaishali-more-554567249">
          <LinkedInIcon />
          </Link>
          
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media(max-width:600px": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; Vaishali More
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
