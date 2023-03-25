import { Close } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogContent,
  Typography,
  DialogActions,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { useState } from "react";

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export interface PopUpElement {
  title: string;
  content: string;
}

interface PopUpProps {
  popUpElement: PopUpElement;
  handleClose: () => void;
  open: boolean;
  id: string;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const PopUp = (props: PopUpProps) => {
  const { handleClose, open, id, popUpElement } = props;

  return (
    <>
      <Dialog onClose={handleClose} aria-labelledby={id} open={open}>
        <BootstrapDialogTitle id={id} onClose={handleClose}>
          {popUpElement.title}
        </BootstrapDialogTitle>
        <DialogContent dividers>{popUpElement.content}</DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PopUp;
