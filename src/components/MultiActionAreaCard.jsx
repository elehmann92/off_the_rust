import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  Button,
  CardActionArea,
  CardActions,
  Box,
  Typography,
  Modal,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AvailabilityLabel from "./AvailabilityLabel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: "700px",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
};

export default function MultiActionAreaCard({ product }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="Item">
      <Card sx={{ maxWidth: 345, margin: "auto" }}>
        <CardActionArea onClick={() => navigate(`/products/${product.id}`)}>
          <CardMedia
            component="img"
            height="350"
            sx={{objectFit: "contain" }}
            image={`/${product.images[0]}`}
            alt={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <AvailabilityLabel product={product}/>
            {/* <label className={product.status}>{product.status}</label> */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginTop: "1rem" }}
            >
              $ {product.price.toLocaleString("de-DE")}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={handleOpen} size="small" color="primary">
             DESCRIPCIÓN
          </Button>
          {/* <ProductModal/> */}
        </CardActions>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {product.name}
            </Typography>
            <label className={product.status}>{product.status}</label>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {product.description}
            </Typography>
            <img
              className="whatsapp_logo"
              src="/whatsapp-logo-11.png"
              alt="whatsapp"
              onClick={() =>
                window.open("https://wa.me/5491155790833", "_blank")
              }
              style={{position:'fixed', top: "80%", left: "85%"}}
            />
          </Box>
        </Modal>
      </Card>
    </div>
  );
}
