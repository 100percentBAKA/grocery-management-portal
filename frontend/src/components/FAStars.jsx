//* fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

import { Box } from "@mui/material";

export default function FAStars() {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <FontAwesomeIcon icon={faStar} color="#ff7800" />
      <FontAwesomeIcon icon={faStar} color="#ff7800" />
      <FontAwesomeIcon icon={faStar} color="#ff7800" />
      <FontAwesomeIcon icon={faStar} color="#ff7800" />
      <FontAwesomeIcon icon={faStarHalfAlt} color="#ff7800" />
    </Box>
  );
}
