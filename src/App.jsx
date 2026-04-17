import React from 'react';
import './App.css';
import Sobre from './componentes/Sobre';
import Projetos from './componentes/Projetos';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Antonia Marques</h1>
        <nav className="container">
          <ul className="menu">
            <li><a href="#sobre">Sobre Mim</a></li>
            <li><a href="#projetos">Projetos</a></li>
          </ul>
        </nav>
      </header>

      <main className="container">
        <Sobre />
        <Projetos />
      </main>

      <footer>
        <p>&copy; 2026 Antonia Marques - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;