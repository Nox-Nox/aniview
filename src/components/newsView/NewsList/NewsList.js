import { Box, Typography, ThemeProvider } from "@mui/material";
import { mainTheme } from "../../Theme/mainTheme";

function NewsList(props) {
  return (
    <ThemeProvider theme={mainTheme}>
    <Box
      backgroundColor={mainTheme.palette.primary.light}
      height="70vh"
      width="20%"
      borderRadius="1rem"
      marginRight="1.5vw"
      display="flex"
      alignItems="center"
    >
      <Box maxHeight="98%" overflow="auto" >
        {(props.data || []).map((item) => (
          <Typography color="white" padding="0.8rem" key={item.id}>
            {item.title}
          </Typography>
        ))}
      </Box>
    </Box>
    </ThemeProvider>
  );
}
export default NewsList;
