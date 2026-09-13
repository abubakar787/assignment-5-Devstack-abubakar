import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface TechnologyListProps {
  technologies: Technology[];
  stack: Technology[];
  onAdd: (technology: Technology) => void;
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const TechnologyList = ({
  technologies,
  stack,
  onAdd,
  onRemove,
  onRemoveAll,
}: TechnologyListProps) => {
  return (
    <section
      id="technologies"
      className="bg-white px-5 py-16 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-7">

          <div className="mb-2 h-[3px] w-5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500"></div>

          <h2 className="text-2xl font-bold text-slate-900">
            Explore the{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>

        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_180px] xl:grid-cols-[1fr_180px]">

          {/* Cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={stack.some(
                  (item) => item.id === technology.id
                )}
                onAdd={onAdd}
              />
            ))}

          </div>

          {/* Stack */}
          <YourStack
            stack={stack}
            onRemove={onRemove}
            onRemoveAll={onRemoveAll}
          />

        </div>

      </div>
    </section>
  );
};

export default TechnologyList;