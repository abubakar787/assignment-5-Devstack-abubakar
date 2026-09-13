import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <div className="card border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      
      <div className="card-body p-4">

        {/* Top */}
        <div className="flex items-center justify-between">
          
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-7 w-7 object-contain"
          />

          <span className="badge badge-sm bg-purple-50 text-[10px] text-purple-500 border-0">
            {technology.badge}
          </span>

        </div>

        {/* Name */}
        <h3 className="mt-2 text-base font-bold text-slate-900">
          {technology.name}
        </h3>

        {/* Description */}
        <p className="min-h-[58px] text-[10px] leading-4 text-slate-500">
          {technology.description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-2">

          <span className="badge badge-sm bg-slate-100 text-[9px] text-slate-500 border-0">
            {technology.category}
          </span>

          <span className="text-[9px] text-slate-500">
            {technology.difficulty}
          </span>

          <span className="text-[10px] font-semibold text-orange-400">
            ★ {technology.rating}
          </span>

        </div>

        {/* Button */}
        <button
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={`btn btn-sm mt-1 min-h-8 h-8 w-full border-0 text-[10px] ${
            isAdded
              ? "bg-purple-100 text-purple-600"
              : "bg-[#101522] text-white hover:bg-[#202738]"
          }`}
        >
          {isAdded ? "Added to Stack" : "Add to Stack"}
        </button>

      </div>

    </div>
  );
};

export default TechnologyCard;