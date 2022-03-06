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
          className={classes.border}
          display="flex"
          position="relative"
          height="30vh"
          margin="2vw"
          flexDirection="row"
        >
          <Box>
            <CardMedia
              component="img"
              image={item.coverImage.large}
              height="100%"
            />
            <Box
              sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
              position="absolute"
              top="0"
              width="10VW"
              paddingBottom="auto"
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
          <Box>
            <Box
              className={classes.scroll}
              width="14vw"
              alignItems="flex-end"
              backgroundColor={mainTheme.palette.primary.light}
              sx={{
                flexDirection: "column",
                height: "80%",
                maxHeight: "120%",
              }}
            >
              <Typography
                color={"white"}
                variant="body2"
                dangerouslySetInnerHTML={{ __html: item.description }}
                padding="1vw"
              />
            </Box>

            <Stack
              alignItems="center"
              className={classes.scroll}
              direction="row"
              spacing={1}
              flexGrow={1}
              width="14vw"
              height="20%"
              backgroundColor={mainTheme.palette.primary.light}
              padding="5px"
            >
              <GenresChip items={item.genres} />
            </Stack>
          </Box>
        </Box>
      ))}
    </ThemeProvider>
  );
}
export default CardView;
