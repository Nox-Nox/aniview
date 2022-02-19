import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
  CardActions,
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { Collapse, styled, IconButton } from "@mui/material";

let theme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
});
theme = responsiveFontSizes(theme);

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function CardView(props) {
  const [expanded, setExpanded] = useState(false);
  //const [selectedId, setSelectedId] = useState(-1);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ThemeProvider theme={theme}>
      {(props.items || []).map((item) => (
        <Card
          key={item.id}
          sx={{
            width: "16vw",
            marginBottom: 4,
            margin: 5,
          }}
        >
          <CardHeader title={item.title.romaji} subheader={item.source} />

          <CardContent>
            <CardMedia
              height={180}
              width={40}
              component="img"
              image={item.coverImage.large}
            />

            <Typography variant="body1">{item.genres}</Typography>
          </CardContent>
          <CardActions sx={{ padding: 0 }}>
            <ExpandMore expand={expanded} onClick={handleExpandClick}>
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography variant="body1">{item.description}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
      )
    </ThemeProvider>
  );
}
export default CardView;
