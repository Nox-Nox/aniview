import {
  Typography,
  CardMedia,
  ThemeProvider,
  Box,
  Stack,
} from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";
import GenresChip from "../Chip/GenresChip";
import classes from "./Scroll.module.css";

function CardView(props) {
  return (
    <ThemeProvider theme={mainTheme}>
      {(props.items || []).map((item) => (
        <Box
          key={item.id}
          display="flex"
          position="relative"
          height="30vh"
          margin="2vw"
          flexDirection="row"
          borderradius="2rem"
        >
          <Box
            sx={{
              borderTopLeftRadius: "1rem",
              borderBottomLeftRadius: "1rem",
            }}
          >
            <CardMedia
              sx={{
                borderTopLeftRadius: "1rem",
                borderBottomLeftRadius: "1rem",
              }}
              component="img"
              image={item.coverImage.large}
              height="100%"
            />
            <Box
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                borderBottomLeftRadius: "1rem",
              }}
              position="absolute"
              bottom="0"
              width="10VW"
              height="auto"
            >
              <Typography
                color={"white"}
                paddingTop="2px"
                paddingLeft="4px"
                paddingRight="2px"
                variant="body1"
              >
                {item.title.romaji}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" alignSelf="flex-end">
            <Box
              backgroundColor="blue"
              height="6vh"
              sx={{
                borderTopRightRadius: "1rem",
              }}
            >
              {" "}
            </Box>
            <Box
              className={classes.scroll}
              width="13vw"
              backgroundColor={mainTheme.palette.primary.light}
              height="20vh"
              maxHeight="100%"
            >
              <Box width="12.5vw">
                <Typography
                  color={"white"}
                  variant="body2"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                  padding="1vw"
                />
              </Box>
            </Box>
            <Box
              width="13vw"
              backgroundColor="red"
              sx={{ borderBottomRightRadius: "1rem" }}
            >
              <Box
                width="12.8vw"
                height="4vh"
                overflow="hidden"
                className={classes.scroll}
              >
                <Stack direction="row" spacing={1} marginTop="0.5vh">
                  <GenresChip items={item.genres} />
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </ThemeProvider>
  );
}
export default CardView;
