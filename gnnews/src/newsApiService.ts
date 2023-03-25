interface NewsSource {
  id: unknown;
  name: string;
}

export interface News {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: NewsSource;
}

const apiKey = "7c616d9546fb4782aca819838b919f0f"; // replace with your NewsAPI API key

export async function getNewsData(query: string): Promise<News[] | null> {
  const url =
    "https://newsapi.org/v2/everything?" +
    `q=${query}&` +
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
