import { FormatListBulleted, GridOn } from "@mui/icons-material";
import { Tooltip, IconButton } from "@mui/material";
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_VIEW_TYPE } from "../../state/actions";
import { State } from "../interfaces";
import { ViewType } from "../types";

const ViewLayoutSwitcher = () => {
  const selectViewType = (state: State) => state.viewType;
  const viewType = useSelector(selectViewType);
  const dispatch = useDispatch();

  const setViewType = (newViewType: ViewType) => {
    dispatch({
      type: SET_VIEW_TYPE,
      payload: newViewType,
    });
  };

  const isGrid = useMemo(() => {
    return viewType === "grid";
  }, [viewType]);

  const handleToggleViewType = () => {
    const newViewType = isGrid ? "list" : "grid";
    setViewType(newViewType);
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
