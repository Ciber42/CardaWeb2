import React from "react";
import ListaProdutos from "./components/ListaProdutos";
import "./App.css";

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="header-title" onClick={scrollToTop} style={{ cursor: "pointer" }}>
          Carda
        </h1>
        <nav className="nav-menu">
          <a href="#" className="nav-link">Categorias</a>
          <a href="#footer" className="nav-link">Sobre nós</a>
          <a href="#" className="nav-link">Login/Cadastro</a>
          <a href="#" className="nav-link">Carrinho</a>
        </nav>
      </header>

      <main>
        <ListaProdutos />
      </main>

      <footer id="footer" className="footer">
        <p>Sobre nós: Aluno-Edilson Sakyo, utilizei a API FakeStore para a atividade avaliativa de WEB2</p>
      </footer>
    </div>
  );
}

export default App;
