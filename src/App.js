import React from "react";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <h2>Country Filter</h2>
      <section className="w-30 justify-content-center layout-column mt-30 mx-auto">
        <Search />
      </section>
    </div>
  );
}

export default App;
