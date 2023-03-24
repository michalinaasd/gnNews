import { List, ListItem, ListItemText, Button, Box } from "@mui/material";
import { News } from "../../newsApiService";

interface ListViewProps {
  data: News[];
}

const ListView = (props: ListViewProps) => {
  const { data } = props;
  return (
    <List style={{ padding: "10px" }}>
      {data.map((newsItem) => (
        <ListItem
          key={newsItem.title}
          alignItems="flex-start"
          style={{ border: "1px solid black", marginBottom: "10px" }}
        >
          <ListItemText
            primary={newsItem.title}
            secondary={
              <Box display="flex" justifyContent="space-between">
                <Box sx={{ flexBasis: "80%" }} p={1}>
                  <span>{newsItem.description}</span>
                </Box>
                <Box
                  display="flex"
                  sx={{
                    flexBasis: "20%",
                  }}
                  alignItems="center"
                  justifyContent="end"
                >
                  <Button
                    variant="contained"
                    href={newsItem.url}
                    target="_blank"
                  >
                    Read more
                  </Button>
                </Box>
              </Box>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ListView;
