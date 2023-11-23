import React from "react";
import Layout from "../Components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box 
      sx={{
        my:5,
        textAlign:"center",
        p:2,
        "& h4": {
          fontWeight:"bold",
          fontSize:"2rem",
          my:2,
          
          
      
        },
        "& p":{
          textAlign:"justify",
          fontFamily:"-moz-initial",
          fontWeight:"lighter"
        },
        "@media(max-width:600px)":{
          mt:0,
          "& h3":{
            fontSize:"1.5rem",
            fontWeight:"bold"
          },
          "& p":{
            fontSize:"1.5rem",
            fontWeight:"lighter"
          }
        }
      }}>
        <Typography variant="h3">Welcome To My Resturant</Typography>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
          mollitia in quidem facilis quis sed, nostrum porro! Minus natus
          recusandae accusamus labore culpa, perspiciatis illum consequuntur.
          Sint quaerat dolores pariatur velit itaque modi architecto ipsum
          placeat. Culpa, minima placeat? Quasi, exercitationem necessitatibus.
          Quod optio tenetur earum, porro, vitae necessitatibus ab, omnis
          architecto debitis facere ad aspernatur tempore praesentium dicta
          natus rerum est animi sunt dolorem deserunt quos consequatur soluta.
          Rem, neque. 
        </p>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quos
          odio iure sequi alias ea voluptas debitis incidunt culpa nisi quaerat
          repudiandae ipsa. Animi non, soluta reprehenderit pariatur
          voluptatibus modi assumenda inventore explicabo atque incidunt
          perferendis ad earum repellat eum unde at, est magnam tempore
          quibusdam aliquid! Fugiat atque perspiciatis quas autem, aliquam odio!
          Recusandae accusamus voluptas enim incidunt exercitationem.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
