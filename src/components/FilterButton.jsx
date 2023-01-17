import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCategoryFilter } from "../redux/actions";
import { useNavigate } from "react-router-dom";

export default function FilterButton() {
  const { categories, categoryFilter } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (category) => {
    dispatch(setCategoryFilter(category));
    setAnchorEl(null);
    if (window.location.href.slice(-9) !== "/products") navigate("/products");
  };

  return (
    <div className="filterButtonContainer">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "white" }}
      >
        {categoryFilter || "CATEGORÍAS"}
        <FilterAltIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(categoryFilter)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleClose("")}>-TODAS-</MenuItem>
        {categories.map((category) => (
          <MenuItem key={category} onClick={() => handleClose(category)}>
            {category}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
