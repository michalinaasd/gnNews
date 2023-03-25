import { useState } from "react";

type UsePopUpReturnType = [boolean, () => void, () => void];

const usePopUp = (): UsePopUpReturnType => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return [open, handleClickOpen, handleClose];
};

export default usePopUp;
