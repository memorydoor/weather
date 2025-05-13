export async function fetchWeather(lat, lon) {
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch weather');
  const data = await res.json();

  // Next 4 hours (3-hour intervals)
  const hours = data.list.slice(0, 4).map(item => ({
    temp: Math.round(item.main.temp),
    precip: item.pop ? Math.round(item.pop * 100) : 0,
    icon: item.weather[0].icon.replace('n', 'd'), // use day icons for consistency
    time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
  }));

  // Next 4 days (group by date, take first entry for each day)
  const daysMap = {};
  data.list.forEach(item => {
    const date = new Date(item.dt * 1000).toLocaleDateString();
    if (!daysMap[date]) {
      daysMap[date] = item;
    }
  });
  const daysArr = Object.values(daysMap).slice(0, 4);
  const days = daysArr.map(item => ({
    icon: item.weather[0].icon.replace('n', 'd'),
    day: new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' }),
    date: new Date(item.dt * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    desc: item.weather[0].description,
    high: Math.round(item.main.temp_max),
    low: Math.round(item.main.temp_min)
  }));

    console.log(hours, days)
  return { hours, days };
}

// Example city coordinates
export const cities = [
  { name: 'RIO DE JANEIRO', lat: -22.9068, lon: -43.1729 },
  { name: 'BEIJING', lat: 39.9042, lon: 116.4074 },
  { name: 'LOS ANGELES', lat: 34.0522, lon: -118.2437 },
]; 