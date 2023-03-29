import { Close } from "@mui/icons-material";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export interface PopUpElement {
  title: string;
  content: string | React.ReactNode;
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
        <DialogContent dividers sx={{ mb: 3 }}>
          {popUpElement.content}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PopUp;
