import { useState } from "react";
import ProjectCard from "./ProjectCard";

function SearchProject({ projects, deleteProject, editProject }) {
  const [query, setQuery] = useState("");

  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Search Input */}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
          🔍
        </span>
        <input
          className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-white placeholder:text-slate-500 transition-all"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects..."
        />
      </div>

      {/* Project Count */}
      {projects.length > 0 && (
        <p className="text-slate-500 text-xs">
          {filtered.length} of {projects.length} project
          {projects.length !== 1 ? "s" : ""}
          {query && ` matching "${query}"`}
        </p>
      )}

      {/* Empty State */}
      {projects.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-slate-500 text-sm italic">
            No projects yet. Add one above to get started!
          </p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-slate-500 text-sm italic">
            No projects match your search.
          </p>
        </div>
      ) : (
        <ul className="flex flex-col gap-3">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              deleteProject={deleteProject}
              editProject={editProject}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchProject;