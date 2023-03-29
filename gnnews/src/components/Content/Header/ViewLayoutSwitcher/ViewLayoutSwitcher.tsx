import { FormatListBulleted, GridOn } from "@mui/icons-material";
import { Tooltip, IconButton } from "@mui/material";
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../../../interfaces";
import { ViewType } from "../../../types";
import { setViewType } from "../../../../state/appReducer";

const ViewLayoutSwitcher = () => {
  const viewType = useSelector((state: State) => state.app.viewType);
  const dispatch = useDispatch();

  const handleViewTypeChange = (newViewType: ViewType) => {
    dispatch(setViewType(newViewType));
  };

  const isGrid = useMemo(() => {
    return viewType === "grid";
  }, [viewType]);

  const handleToggleViewType = () => {
    const newViewType = isGrid ? "list" : "grid";
    handleViewTypeChange(newViewType);
  };

  return (
    <Tooltip title={isGrid ? "Switch to list view" : "Switch to grid view"}>
      <IconButton onClick={handleToggleViewType} color="inherit">
        {isGrid ? <FormatListBulleted /> : <GridOn />}
      </IconButton>
    </Tooltip>
  );
};

export default ViewLayoutSwitcher;
