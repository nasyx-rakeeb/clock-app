const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcxMTgxNjZjYWNjMDZmNDgwODEwYTgiLCJpYXQiOjE2Njg1ODgzODgsImV4cCI6MTY2ODY3NDc4OH0.DMS-ww650rMnzholgIQp8Hi8RApSrNy-cTv8KLkhGys"
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