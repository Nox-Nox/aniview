import { Chip } from "@mui/material";

function GenresChip(props) {
  return (props.items || []).map((item1, index) => (
    <Chip key={index} label={item1} size="small" variant="filled" sx={{background: 'linear-gradient(to right bottom, #7b29ab, #d238dd)'}} />
  ));
}
export default GenresChip;
