import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { News } from "../../newsApiService";

interface GridViewProps {
  data: News[];
}

const GridView = (props: GridViewProps) => {
  const { data } = props;
  return (
    <Grid container spacing={2} padding={2}>
      {data.map((newsItem) => (
        <Grid item key={newsItem.title} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={newsItem.urlToImage}
              alt={newsItem.title}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {newsItem.title}
              </Typography>
              <Typography variant="body1">{newsItem.description}</Typography>
              <a href={newsItem.url}>Read more</a>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridView;
