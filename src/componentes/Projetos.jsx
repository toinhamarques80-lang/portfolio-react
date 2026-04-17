import React from 'react';

const Projetos = () => {
  const listaProjetos = [
    {
      id: 1,
      titulo: "Portfolio HTML/CSS",
      descricao: "Versão estática feita com HTML5 e CSS3.",
      link: "https://github.com/toinhamarques80-lang/portfolio"
    },
    {
      id: 2,
      titulo: "Portfolio React",
      descricao: "Versão atualizada utilizando componentes e hooks.",
      link: "https://github.com/toinhamarques80-lang/portfolio-react"
    }
  ];

  return (
    <section id="projetos" className="section">
      <h2>Meus Projetos</h2>
      <div className="grid-projetos">
        {listaProjetos.map((projeto) => (
          <div key={projeto.id} className="card-projeto">
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <a href={projeto.link} target="_blank" rel="noreferrer">
              Ver Repositório
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;