import React from "react";
import Layout from "../Components/Layout/Layout";
import {
  Box,
  Paper,
  Typography,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  TableCell,
  TableBody,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 10,
          ml: 10,
          "& h4": {
            fontWeight: "bold",
            mb: 2,
          },
        }}
      >
        <Typography variant="h4">Contact My Resturant</Typography>
        <p style={{ fontWeight: "lighter" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vel
          magni corrupti rem nostrum magnam cum, delectus aspernatur blanditiis
          quos nulla cupiditate doloribus ex voluptates quae deserunt! Ipsam
          debitis, provident, eaque repellendus exercitationem ex suscipit
          aliquam asperiores sit culpa dolorum?
        </p>
      </Box>
      <Box sx={{m:3,width:"600px",ml:10,"@media(max-width:600px)":{
        width:"300px"
      }}}>
        <TableContainer component={Paper}>
          <Table arial-lale="contact-tale">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:"black",color:"white"}}align="center">Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "blue", pt: 1 }} />
                  1800-00-0000 (tolfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "red", pt: 1 }} />
                  vaishalimore855@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} />
                  +91 9763261180
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
