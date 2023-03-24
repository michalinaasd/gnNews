import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { News } from "../../newsApiService";

interface GridViewProps {
  data: News[] | null;
}

const GridView = (props: GridViewProps) => {
  const { data } = props;

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
          <Card style={{ height: "100%" }}>
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
