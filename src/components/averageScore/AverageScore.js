import { Box, Typography } from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbsUpDownOutlinedIcon from "@mui/icons-material/ThumbsUpDownOutlined";

function AverageScore(props) {
  return (
    <Box
      sx={{
        borderTopRightRadius: "1vw",
      }}
      width="6vw"
      height="5vh"
      marginLeft="auto"
      textAlign="center"
      paddingTop="5px"
    >
      {props.score > 78 ? (
        <Box
          paddingRight="0.8vw"
          paddingTop="0.6vh"
          width="6vw"
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
        >
          <Box>
            <ThumbUpAltOutlinedIcon sx={{ color: "lightgreen" }} />
          </Box>
          <Box>
            <Typography fontSize="1.2em" paddingLeft="0.3vw" color="pink">
              {props.score}%
            </Typography>
          </Box>
        </Box>
      ) : props.score < 60 && props.score !== null ? (
        <Box
          paddingRight="0.8vw"
          paddingTop="0.6vh"
          width="6vw"
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
        >
          <Box>
            <ThumbDownAltOutlinedIcon sx={{ color: "red" }} />
          </Box>
          <Box>
            <Typography fontSize="1.2em" paddingLeft="0.3vw" color="pink">
              {props.score}%
            </Typography>
          </Box>
        </Box>
      ) : 60 < props.score < 78 && props.score !== null ? (
        <Box
          paddingRight="0.8vw"
          paddingTop="0.6vh"
          width="6vw"
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
        >
          <Box>
            <ThumbsUpDownOutlinedIcon sx={{ color: "yellow" }} />
          </Box>
          <Box>
            <Typography fontSize="1.2em" paddingLeft="0.3vw" color="pink">
              {props.score}%
            </Typography>
          </Box>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}

export default AverageScore;
