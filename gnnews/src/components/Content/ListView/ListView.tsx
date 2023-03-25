import { List, ListItem } from "@mui/material";
import { useState } from "react";
import { News } from "../../../newsApiService";
import PopUp, { PopUpElement } from "../../Header/PopUp";
import usePopUp from "../../Header/usePopUp";
import NewsListItemText from "../NewsListItem";
import "./listView.css";

const INITIAL_POPUP_STATE: PopUpElement = {
  title: "",
  content: "",
};

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
      content: newsItem.description,
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