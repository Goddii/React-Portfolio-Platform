import { useState } from "react";
import AddProject from "./AddProject";
import SearchProject from "./SearchProject";


function LandingPage(){
    const [projects, setProjects] = useState([])

    function addProject(newProject){
        setProjects([...projects, newProject])
    }


    return (
        <div className="main-container">
            <h1>Personal Project Showcase App</h1>
            <AddProject onAddProject={addProject}/>
            <SearchProject projects={projects} />
        </div>
    )
}

export default LandingPage;