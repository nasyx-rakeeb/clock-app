export const getWeatherData = async (lat, lng) => {
  const URL =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=244051b761f3bc4b510614ace5464aa5`
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
ù}