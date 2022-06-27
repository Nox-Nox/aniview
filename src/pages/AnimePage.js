import React, { useState } from "react";
import {
  Typography,
  ThemeProvider,
  Box,
  responsiveFontSizes,
  Select,
  MenuItem,

} from "@mui/material";

function AnimePage() {
  const [isLoading, setLoading] = useState(true);
  
  
  
  return (
    <Box>
      <Box height="40vh" backgroundColor=" red" display="flex" justifyContent="center" alignItems="center">
        <Box backgroundColor="cyan" height="38vh" width = "99%" borderRadius="3rem"> </Box>
      </Box>
      <Box height="10vh" backgroundColor="lightgreen"> search fields, filters</Box>
      <Box height="50vh" backgroundColor="gray" >rgdrg</Box>
    </Box>
  );
}
export default AnimePage;
