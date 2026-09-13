import type { Technology } from "../types/technology";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="card h-fit border border-slate-200 bg-white shadow-sm lg:sticky lg:top-24">

      <div className="card-body p-4">

        {/* Header */}
        <div>
          <h3 className="text-sm font-bold text-slate-900">
            Your Stack
          </h3>

          <p className="mt-1 text-[9px] text-slate-400">
            {stack.length} Technology
            {stack.length !== 1 ? "ies" : ""} Selected
          </p>
        </div>

        {/* Empty */}
        {stack.length === 0 ? (
          <div className="my-4 rounded-lg border border-dashed border-slate-200 p-6 text-center">

            <p className="text-xs font-medium text-slate-500">
              Your stack is empty
            </p>

            <p className="mt-1 text-[9px] text-slate-400">
              Add technologies to build your stack.
            </p>

          </div>
        ) : (
          
          <div className="my-3 space-y-2">

            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-2 rounded-lg border border-slate-200 p-2"
              >

                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-6 w-6 object-contain"
                />

                <div className="flex-1">
                  <p className="text-[10px] font-semibold text-slate-800">
                    {technology.name}
                  </p>

                  <p className="text-[8px] text-slate-400">
                    {technology.category}
                  </p>
                </div>

                <button
                  onClick={() => onRemove(technology.id)}
                  className="btn btn-ghost btn-xs text-slate-400"
                >
                  ×
                </button>

              </div>
            ))}

          </div>
        )}

        {/* Remove All */}
        <button
          onClick={onRemoveAll}
          disabled={stack.length === 0}
          className="btn btn-outline btn-sm min-h-8 h-8 w-full border-red-200 text-[9px] text-red-500 hover:border-red-300 hover:bg-red-50"
        >
          Remove All
        </button>

      </div>

    </aside>
  );
};

export default YourStack;