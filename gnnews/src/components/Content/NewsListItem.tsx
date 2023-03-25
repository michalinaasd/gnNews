import { Box, ListItemText } from "@mui/material";
import moment from "moment";
import { News } from "../../newsApiService";

interface NewsListItemTextProps {
  newsItem: News;
}
const NewsListItemText = ({ newsItem }: NewsListItemTextProps) => {
  return (
    <ListItemText
      primary={
        <Box display="flex" justifyContent="space-between">
          <span>{newsItem.source.name}</span>
          <span>{moment(newsItem.publishedAt).format("DD-MM-YYYY")}</span>
        </Box>
      }
      secondary={<span>{newsItem.title}</span>}
    />
  );
};

export default NewsListItemText;
