export const getTime = (date) => {
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  hours = hours ? hours : 12
  minutes = minutes < 10 ? '0'+minutes : minutes
  let strTime = hours + ':' + minutes + ' ' + ampm
  let weekday = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'][date.getDay()]
  return [hours, minutes, ampm, weekday]
}

export const timeConvert = (time) => {
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  if (time.length > 1) { 
    time = time.slice (1);
    time[5] = +time[0] < 12 ? ' AM' : ' PM'; 
    time[0] = +time[0] % 12 || 12; 
  }
  return time.join ('')
}