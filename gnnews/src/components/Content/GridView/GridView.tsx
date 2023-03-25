import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import { News } from "../../../newsApiService";
import PopUp, { PopUpElement } from "../../Header/PopUp";
import usePopUp from "../../Header/usePopUp";
import "./gridView.css";

interface GridViewProps {
  data: News[] | null;
}

const getRandomImg = () => {
  // for demonstration purposes
  //in a production application
  //it would be better to use a reliable source of images.
  return "http://placekitten.com/200/300";
};

const GridView = ({ data }: GridViewProps) => {
  const [open, handleClickOpen, handleClose] = usePopUp();

  const INITIAL_POPUP_STATE: PopUpElement = {
    title: "",
    content: "",
  };

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

  if (data.length === 0) {
    return <p>No data</p>;
  }

  return (
    <Grid container spacing={2} padding={2}>
      {data.map((newsItem, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card className="card" onClick={() => clickHandler(newsItem)}>
            <CardMedia
              component="img"
              image={newsItem.urlToImage ?? getRandomImg()}
              alt={newsItem.title}
            />
            <CardContent>
              <Tooltip title={newsItem.title} placement="top">
                <Typography variant="h6" className="title" gutterBottom>
                  {newsItem.title}
                </Typography>
              </Tooltip>
              <Typography variant="body1">{newsItem.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <PopUp
        id="list-pop-up"
        handleClose={handleClose}
        open={open}
        popUpElement={currentElement}
      />
    </Grid>
  );
};

export default GridView;
