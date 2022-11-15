const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcxMTgxNjZjYWNjMDZmNDgwODEwYTgiLCJpYXQiOjE2Njg0OTYyNTYsImV4cCI6MTY2ODU4MjY1Nn0.npol1qzDbe8R5cSObWCQvK9ikpCzYAmY9M8XKGq7--c"
const URL = "http://api.cup2022.ir/api/v1/match"

export async function getMatches() {
  try {
    const res = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/plain, /",
        Authorization: token,
      }
    })
    const data = await res.json();
    return data
  } catch (error) {
    return error
  }
}

export async function getMatches2() {
  const URL = "https://api-football-v1.p.rapidapi.com/v3/fixtures"
  try {
    const res = await fetch(URL, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, /",
        'X-RapidAPI-Key': '152152b7bf0759c3161a511bb069c95a',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    })
    const data = await res.data.json();
    return data
  } catch (error) {
    return error
  }
}