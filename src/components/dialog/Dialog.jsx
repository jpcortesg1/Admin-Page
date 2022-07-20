import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ params }) {
  const { open, setOpen, content } = params;
  const { title, description, agree, disagree, excecute } = content;

  const handleClose = () => setOpen(false);

  const handleExecute = () => {
    excecute();
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {title && <DialogTitle>{title}</DialogTitle>}

        {description && (
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {description}
            </DialogContentText>
          </DialogContent>
        )}
        {(agree || disagree) && (
          <DialogActions>
            {disagree && <Button onClick={handleClose}>{disagree}</Button>}
            {agree && <Button onClick={handleExecute}>{agree}</Button>}
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
}
