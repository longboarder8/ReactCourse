import { useEffect, useState } from "react";

const WEATHER_URL = "https://mm214.com/demo.php"; 
// 👆 Replace this with your instructor’s JSON weather link if different

export default function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        setLoading(true);
        const res = await fetch(WEATHER_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchWeather();
  }, []);

  if (loading) return <h2>Loading weather...</h2>;
  if (error) return <h2 style={{ color: "red" }}>Error: {error}</h2>;
  if (!weather) return <h2>No data.</h2>;

  // 👇 Adjust these lines to match the actual JSON keys from your instructor’s site
  return (
    <div style={{ padding: "20px" }}>
      <h1>Weather</h1>
      <p><b>City:</b> {weather.name}</p>
      <p><b>Temperature:</b> {weather.main?.temp}K</p>
      <p><b>Conditions:</b> {weather.weather?.[0]?.description}</p>
      <p><b>Humidity:</b> {weather.main?.humidity}%</p>
      <p><b>Wind:</b> {weather.wind?.speed} m/s</p>
    </div>
  );
}