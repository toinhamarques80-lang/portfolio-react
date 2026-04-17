import React from 'react';
import minhaFoto from '../foto.jpeg';

const Sobre = () => {
  return (
    <section id="sobre" className="section">
      <h1>Sobre Mim</h1>
      <img src={minhaFoto} alt="Antonia Marques" className="foto-perfil" />
      <p>Desenvolvedora em formação, apaixonada por transformar ideias em experiências digitais interativas e funcionais.</p>
    </section>
  );
};

export default Sobre;