import { Box, ListItemText } from "@mui/material";
import moment from "moment";
import { News } from "../../newsApiService";

interface NewsListItemTextProps {
  newsItem: News;
}
const NewsListItemText = ({ newsItem }: NewsListItemTextProps) => {
  return (
    <ListItemText
      primary={<span>{newsItem.title}</span>}
      secondary={
        <Box display="flex" justifyContent="space-between">
          <span>{newsItem.source.name}</span>
          <span>{moment(newsItem.publishedAt).format("DD-MM-YYYY")}</span>
        </Box>
      }
    />
  );
};

export default NewsListItemText;
