import {
  Typography,
  CardMedia,
  createTheme,
  ThemeProvider,
  Box,
  Stack,
} from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";
import GenresChip from "../Chip/GenresChip";

let theme = createTheme({
  components: {
    MuiCardMedia: {
      styleOverrides: {
        root: {
          width: "10vw",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

function CardView(props) {
  {
    (props.items || []).map((item1) => console.log(item1.genres));
  }
  return (
    <ThemeProvider theme={theme}>
      {(props.items || []).map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            margin: "2vw",
          }}
        >
          <Box
            sx={{
              float: "left",
            }}
          >
            <CardMedia
              component="img"
              image={item.coverImage.large}
              height="260vh"
              width="10vw"
              display="flex"
              sx={{ borderTopLeftRadius: "20%" }}
            />
          </Box>
          <Box
            backgroundColor={mainTheme.palette.primary.light}
            sx={{ borderBottomRightRadius: "10%" }}
            width="10vw"
          >
            <Box
              float="left"
              width="10vw"
              sx={{
                overflowY: "auto",
                flexGrow: 1,
                flexDirection: "column",
                height: "22vh",
                maxHeight: "250vh",
                display: "flex",
                marginBottom: "1vh",
              }}
            >
              <Typography
                color={"white"}
                fontSize="12px"
                variant="body2"
                dangerouslySetInnerHTML={{ __html: item.description }}
                padding="1vh"
              ></Typography>
            </Box>
            <Stack
              alignItems={"center"}
              spacing={1}
              padding={1}
              sx={{
                overflow: "auto",
                flexGrow: 1,
                flexDirection: "column",
                height: "6.2vh",
                maxHeight: "50vh",
                justifyItems: "flex-start",
                borderBottomRightRadius: "10%",
              }}
              width={"100%"}
              backgroundColor={mainTheme.palette.primary.dark}
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
