const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcxMTgxNjZjYWNjMDZmNDgwODEwYTgiLCJpYXQiOjE2NjgzNTYxNjIsImV4cCI6MTY2ODQ0MjU2Mn0.a5xLoY_UsXgcjMD7fpdGZw4nLYJxX0M-a9MZ4kKY64E"
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