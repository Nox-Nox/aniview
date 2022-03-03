import { Chip } from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";

function GenresChip(props) {
  return (props.items || []).map((item1) => (
    <Chip label={item1} size="small" variant="filled" sx={{background: 'linear-gradient(to right bottom, #7b29ab, #d238dd)'}} />
  ));
}
export default GenresChip;
