import { Chip } from "@mui/material";

function GenresChip(props) {
  return (props.items || []).map((item1) => (
    <Chip label={item1} size="small" color="error" />
  ));
}
export default GenresChip;
