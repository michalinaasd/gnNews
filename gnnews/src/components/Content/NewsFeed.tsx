import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNewsData, News } from "../../newsApiService";
import { State } from "../interfaces";
import GridView from "./GridView";
import ListView from "./ListView";

const NewsFeed = () => {
  const { countryName } = useParams();
  const [articles, setArticles] = useState<News[] | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const selectViewType = (state: State) => state.viewType;
  const viewType = useSelector(selectViewType);

  useEffect(() => {
    const fetchNewsData = async () => {
      if (countryName === undefined) {
        return;
      }
      const data = await getNewsData(countryName);
      if (data) {
        setArticles(data);
      } else {
        setErrorMessage("Error fetching news data");
      }
    };
    countryName && fetchNewsData();
  }, [countryName]);

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  if (!articles) {
    return <div>Loading...</div>;
  }

  switch (viewType) {
    case "grid":
      return <GridView data={articles} />;
    case "list":
      return <ListView data={articles} />;
    default:
      return null;
  }
};

export default NewsFeed;
