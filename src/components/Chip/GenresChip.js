import { Chip } from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";

function GenresChip(props) {
  return (props.items || []).map((item1) => (
    <Chip label={item1} size="small" color="info" variant="filled" />
  ));
}
export default GenresChip;
