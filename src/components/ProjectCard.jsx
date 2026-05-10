import { useState } from "react";


function ProjectCard({ project, deleteProject, editProject }) {
    const [isEditing, setIsEditing] = useState(false)
    const [editData, setEditData] = useState({
        title: project.title,
        description: project.description,
    })


    function handleSave() {
        if(!editData.title.trim()) return;
        editProject(project.id, editData)
        setIsEditing(false)
    }

    function handleCancel() {
        setEditData({title: project.title, description: project.description})
        setIsEditing(false)
    }

  return (
    <li className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all duration-200">
      {isEditing ? (
        <div className="flex flex-col gap-2">
          <input
            className="bg-white/10 border border-white/20 focus:border-blue-500 outline-none rounded-md px-3 py-1.5 text-white text-sm"
            value={editData.title}
            onChange={(e) =>
              setEditData({ ...editData, title: e.target.value })
            }
          />
          <textarea
            rows={2}
            className="bg-white/10 border border-white/20 focus:border-blue-500 outline-none rounded-md px-3 py-1.5 text-white text-sm resize-none"
            value={editData.description}
            onChange={(e) =>
              setEditData({ ...editData, description: e.target.value })
            }
          />
          <div className="flex gap-2 mt-1">
            <button
              onClick={handleSave}
              className="text-xs px-3 py-1 rounded-md bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="text-xs px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-slate-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <strong className="text-cyan-400 font-semibold block truncate">
              {project.title}
            </strong>
            {project.description && (
              <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                {project.description}
              </p>
            )}
          </div>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => setIsEditing(true)}
              className="text-xs px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-slate-300 transition-colors"
              aria-label="Edit project"
            >
              Edit
            </button>
            <button
              onClick={() => deleteProject(project.id)}
              className="text-xs px-3 py-1 rounded-md bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"
              aria-label="Delete project"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default ProjectCard;
