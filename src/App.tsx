import { useEffect, useState } from "react";
import type { Technology } from "./types/technology";

import Nav from "./nav";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";
import Footer from "./components/Footer";

function App() {
  // All technologies from JSON
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  // Technologies selected by user
  const [stack, setStack] = useState<Technology[]>([]);

  // Load technologies from JSON
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

  // Remove one technology
  const removeFromStack = (id: string) => {
    setStack((currentStack) =>
      currentStack.filter(
        (technology) => technology.id !== id
      )
    );
  };

  // Remove all technologies
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