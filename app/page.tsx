import React from 'react';
import Header from "@/app/componets/Header/header"
import Home from '@/app/componets/Home/home';
import Project from '@/app/componets/Project/project';
import About from '@/app/componets/About/about';
import Contact from '@/app/componets/Contact/contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Project />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
