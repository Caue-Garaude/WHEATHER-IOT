import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/weather');
                setWeatherData(response.data);
            } catch (err) {
                setError('Erro ao carregar os dados do clima.');
            }
        };

        fetchWeather();
    }, []);

    if (error) return <div>{error}</div>;

    if (!weatherData) return <div>Carregando...</div>;

    return (
        <div>
            <h2>Clima em {weatherData.name}</h2>
            <p>Temperatura: {weatherData.main.temp} °C</p>
            <p>Máxima: {weatherData.main.temp_max} °C</p>
            <p>Mínima: {weatherData.main.temp_min} °C</p>
            <p>Umidade: {weatherData.main.humidity}%</p>
            <p>Velocidade do Vento: {weatherData.wind.speed} m/s</p>
        </div>
    );
};

export default Weather;
