import { List, ListItem } from "@mui/material";
import { useState } from "react";
import { News } from "../../../../services/newsApiService";
import PopUp, { PopUpElement } from "../../Header/PopUp";
import usePopUp from "../../Header/usePopUp";
import { INITIAL_POPUP_STATE } from "../../../helpers";
import NewsListItemText from "../NewsListItem";
import NewsPopupItem from "../NewsPopupItem/NewsPopupItem";
import "./listView.css";

interface ListViewProps {
  data: News[] | null;
}

const ListView = ({ data }: ListViewProps) => {
  const [open, handleClickOpen, handleClose] = usePopUp();

  const [currentElement, setCurrentElement] =
    useState<PopUpElement>(INITIAL_POPUP_STATE);

  const clickHandler = (newsItem: News) => {
    setCurrentElement({
      title: newsItem.title,
      content: <NewsPopupItem news={newsItem} />,
    });
    handleClickOpen();
  };

  if (!data) {
    return <p>Loading...</p>;
  }

  if (!data?.length) {
    return <p>No data</p>;
  }

  return (
    <List className="list-view">
      {data?.map((newsItem) => (
        <ListItem
          key={Math.random()}
          alignItems="flex-start"
          className="list-item"
          onClick={() => clickHandler(newsItem)}
        >
          <NewsListItemText newsItem={newsItem} />
        </ListItem>
      ))}
      <PopUp
        id="list-pop-up"
        handleClose={handleClose}
        open={open}
        popUpElement={currentElement}
      />
    </List>
  );
};

export default ListView;
