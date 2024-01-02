import "./App.css";
import { Navbar, Brand, Cta } from "./components";
import {
  Blog,
  Features,
  Possibility,
  WhatGPT3,
  Header,
  Footer,
} from "./containers";

const App = () => {
  return (
    <div className="App ">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
