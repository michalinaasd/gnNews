import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getNewsData, News } from "../../newsApiService";
import { State } from "../interfaces";
import GridView from "./GridView";
import ListView from "./ListView";

const NewsFeed = (props: any) => {
  const { query } = props;
  const isLoaded = useRef(true);
  const [articles, setArticles] = useState<News[] | null>(null);

  const selectViewType = (state: State) => state.viewType;
  const viewType = useSelector(selectViewType);

  useEffect(() => {
    const fetchNewsData = async () => {
      const data = await getNewsData(query);
      setArticles(data);
      isLoaded.current = true;
    };
    isLoaded.current = false;
    query && fetchNewsData();
  }, [query]);

  if (!isLoaded && !articles) {
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
