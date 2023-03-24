export interface News {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

const apiKey = "e0aed983f92c44adb075df3f21d2b500"; // replace with your NewsAPI API key

export async function getNewsData(query: string): Promise<News[] | null> {
  const url =
    "https://newsapi.org/v2/everything?" +
    "q=Apple&" +
    "from=2023-03-23&" +
    "sortBy=popularity&" +
    `apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error fetching news data:", error);
    return null;
  }
}
