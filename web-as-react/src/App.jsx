import React from "react";
import Navbar from "./components/Navbar";
import NewsContainer from "./components/NewsContainer";
import OpinionContainer from "./components/OpinionContainer";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <NewsContainer />
        <OpinionContainer />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
