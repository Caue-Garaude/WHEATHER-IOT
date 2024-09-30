import React from 'react';
import Weather from './components/Weather';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Aplicação do Clima</h1>
                <Weather />
            </header>
        </div>
    );
}

export default App;
