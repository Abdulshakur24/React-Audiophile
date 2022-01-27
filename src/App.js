import React from "react";
import "./scss/App.scss";

import {
  Navbar,
  Banner,
  Products,
  Galleries,
  Description,
  Footer,
} from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Products />
      <Galleries />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
