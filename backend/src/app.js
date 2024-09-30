const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();




const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/weather', async (req, res) => {
    const lat = -23.5325;  // Latitude de Osasco
    const lon = -46.7917;  // Longitude de Osasco
    const apiKey = 'a669c7581a465a7a7c6ca5cea61e378f'; // Sua chave da API

    console.log(`Buscando dados para: lat=${lat}, lon=${lon}, apiKey=${apiKey}`);

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7465f842571623b10e26df1475ca8146&units=metric`);
        console.log(response.data); // Logar a resposta
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao chamar a API:', error.response ? error.response.data : error.message);
        res.status(500).json({ message: 'Erro ao obter dados do clima' });
    }
});



// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
