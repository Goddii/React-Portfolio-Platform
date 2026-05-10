import { useState } from "react";
import AddProject from "./AddProject";
import SearchProject from "./SearchProject";


function LandingPage(){
    const [projects, setProjects] = useState([])

    function addProject(newProject){
        setProjects([...projects, newProject])
    }

    function deleteProject(id) {
        setProjects(prev => prev.filter(p => p.id !== id))
    }

    function editProject(id, updatedProject) {
        setProjects(prev => prev.map(p => p.id === id ? {...p, ...updatedProject}:p))
    }


    return (
        <div className="flex items-center flex-col gap-8 h-800 justify-between bg-slate-900/80 rotate-x-6 rotate-y-[-10deg] rounded-xl shadow-md p-6 w-1/2  h hover:shadow-xl transition-shadow duration-300">
            <h1 className="text-3xl font-bold text-blue-500">Personal Project Showcase App</h1>
            <AddProject addProject={addProject}/>
            <SearchProject projects={projects} deleteProject={deleteProject} editProject={editProject} />
        </div>
    )
}

export default LandingPage;