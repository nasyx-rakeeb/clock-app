export const getTimezone = async () => {
  const URL = "https://api.ipregistry.co/?key=rc6n2d9t1vcbvwn2"
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