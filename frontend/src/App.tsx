import React from "react";
import "./App.css";
import Product from "./Pages/Product";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Product />
      </Layout>
    </div>
  );
}

export default App;
