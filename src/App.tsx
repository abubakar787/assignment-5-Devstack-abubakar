import { useEffect, useState } from "react";
import type { Technology } from "./types/technology";

import Nav from "./nav";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);

  // Load JSON
  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
      })
      .catch((error) => {
        console.error("Failed to load technologies:", error);
      });
  }, []);

  // Add technology
  const addToStack = (technology: Technology) => {
    setStack((currentStack) => [
      ...currentStack,
      technology,
    ]);
  };

  // Remove one
  const removeFromStack = (id: string) => {
    setStack((currentStack) =>
      currentStack.filter(
        (technology) => technology.id !== id
      )
    );
  };

  // Remove all
  const removeAll = () => {
    setStack([]);
  };

  return (
    <>
      <Nav />

      <main>
        <Hero />

        <TechnologyList
          technologies={technologies}
          stack={stack}
          onAdd={addToStack}
          onRemove={removeFromStack}
          onRemoveAll={removeAll}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;