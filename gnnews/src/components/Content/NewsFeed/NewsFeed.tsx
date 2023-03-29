import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNewsData, News } from "../../../services/newsApiService";
import { setQueryResultsCount } from "../../../state/appReducer";
import { State } from "../../interfaces";
import GridView from "./GridView/GridView";
import ListView from "./ListView/ListView";

const NewsFeed = () => {
  const { countryName } = useParams();
  const [articles, setArticles] = useState<News[] | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const viewType = useSelector((state: State) => state.app.viewType);

  const dispatch = useDispatch();

  const updateCounter = (counter: number) => {
    dispatch(setQueryResultsCount(counter));
  };

  useEffect(() => {
    const fetchNewsData = async () => {
      if (countryName === undefined) {
        return;
      }
      const data = await getNewsData(countryName);
      if (data) {
        setArticles(data);
        updateCounter(data.length);
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
