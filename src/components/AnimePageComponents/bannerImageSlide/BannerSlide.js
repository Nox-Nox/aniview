import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, CardMedia, Typography } from "@mui/material";
import BannerImage from "../bannerImageSlide/noImageAvailable.jpg";

function BannerSlide(props) {
  console.log(props.items);
  return (
    <Box backgroundColor="#171717" borderRadius="4rem" marginBottom="5vh">
      <Carousel>
        {(props.items || []).map((item, index) => (
          <Box>
            {item.bannerImage === null ? (
              <CardMedia
                key={item.id}
                component="img"
                image={BannerImage}
                sx={{ borderRadius: "3rem" }}
              />
            ) : (
              <CardMedia
                key={item.id}
                component="img"
                image={item.bannerImage}
                sx={{ borderRadius: "3rem" }}
              />
            )}

            <Box
              position="absolute"
              zIndex="1"
              bottom="2vh"
              left="1vw"
              backgroundColor="rgba(0, 0, 0, 0.8)"
              padding="0.5rem"
              borderRadius="1.5rem"
            >
              <Typography
                variant="h3"
                fontWeight="bold"
                color="whitesmoke"
                padding="15px"
              >
                {item.title.romaji}
              </Typography>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

export default BannerSlide;
