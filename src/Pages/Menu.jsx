import React from "react";
import Layout from "../Components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { MenuList } from "../Data/Data";
import "../Styles/Menu.css"

const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {MenuList.map((menu) => (
          <Card
          className="menu"
            sx={{
              display: "flex",
              m: 5,
              maxWidth: "420px",
              boxShadow: "8.2px 16.3px 16.3px hsl(0deg 0% 0% / 0.31)",
              
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{
                  minHeight: "400px",
                  borderRadius: "15px",
                }}
                component={"img"}
                src={menu.image}
                alt={menu.image}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
                <Typography variant="h5" gutterBottom component={"div"}>
                  Rs.{menu.price} -/
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
