const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcxMTgxNjZjYWNjMDZmNDgwODEwYTgiLCJpYXQiOjE2Njg1ODMyODIsImV4cCI6MTY2ODY2OTY4Mn0.3eG2O5kKsyWY3sLk7eSrdqkBK_i0JpxUpdxjeSiYQww"
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