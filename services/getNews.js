const URL = "https://newsapi.org/v2/top-headlines?country=sg&category=sports&apiKey=47f36ad2067d412eacd68507c7529c9c"

export async function getNews() {
  try {
    const res = await fetch(URL, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, /"
      }
    })
    const data = await res.json();
    return data.articles
  } catch (error) {
    return error
  }
}