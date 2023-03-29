import { Box } from "@mui/material";
import { News } from "../../../../services/newsApiService";
import "./newsPopupItem.css";

interface NewsPopupItemProps {
  news: News;
}

const NewsPopupItem = ({ news }: NewsPopupItemProps) => {
  return (
    <Box>
      <p>{news.description}</p>
      <p className="small-text">Source: {news.url} </p>
      <p className="small-text">Author: {news.author}</p>
    </Box>
  );
};

export default NewsPopupItem;
