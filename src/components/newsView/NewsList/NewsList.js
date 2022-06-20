import { Box, Typography } from "@mui/material";
import { mainTheme } from "../../Theme/mainTheme";
import { useContext, useState } from "react";
import { NewsContext } from "../../../pages/HomePage";
import React from "react";
import Button from "@mui/material/Button";

function NewsList() {
  const [isColor, setColor] = useState("")
  const { data, set } = useContext(NewsContext);
  const index1 = 1;

  // changeTextColor = () =>{

  // }

  return (
    <Box
      height="70vh"
      width="20%"
      marginRight="1.5vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        id={index1}
        borderRadius="0.6rem"
        maxHeight="100%"
        overflow="auto"
        backgroundColor={mainTheme.palette.primary.light}
        onMouseLeave={() => {
          var wow = document.getElementById(index1);
          wow.scrollTo({ top: 0, behavior: "smooth" });
        }}

        onClick={(e) => {
          if(e.target !== e.currentTarget) {
            var clickedItem = e.target.id
            // console.log(clickedItem)
            // console.log(e.target)
            // console.log(e.currentTarget)
            var k = document.getElementById(clickedItem)
            // var c = document.querySelector(".MuiBox-root.css-effivw").children()
            // console.log(c)
            var c = document.getElementById(index1).childNodes
            // console.log(c)
            for (var i=0; i<c.length; i++){
              // console.log(c[i])
              if(c[i] !== k)
              c[i].style.color="white"
            }
            k.style.color="pink"

          }
        }}
      >
        {(data || []).map((item, index) => (
          <Typography
            sx={{
              borderBottom: 1,
              borderWidth: "3px",
              borderColor: "#9B59B6",
            }}
            component={Button}
            fontSize="15px"
            id={index}
            key={index}
            onClick={() => {
              set(data[index]);
              // i.style.color="pink"
            }}

            width="100%"
            color="white"
            padding="0.6rem"
          >
            {item.title}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
export default NewsList;
