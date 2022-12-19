import React from "react";
import "./style.css";
// import Logo from "./img/logo.png";

const App = () => {
  return (
    <>
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="logo" />
          <h1>Facts Sites!</h1>
        </div>
        <button className="btn btn-large btn-open">Share a fact</button>
      </header>

      <NewFactForm />

      <main className="main">
        <CategoryFilters />
        <FactList />
      </main>
    </>
  );
};

function NewFactForm() {
  return <form className="fact-form">Fact Form</form>;
}

function CategoryFilters() {
  return <aside>Category Filter</aside>;
}

function FactList() {
  return <section>Fact Lists</section>;
}

export default App;
