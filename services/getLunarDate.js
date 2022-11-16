export const getLunarDate = async () => {
  const URL =  "https://clock-api-1.herokuapp.com/"
  try {
    const res = await fetch(URL, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, /"
      }
    })
    const data = await res.json()
    return data
  } catch (error) {
      return error
  }
}