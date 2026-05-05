import { useState } from "react";


function LandingPage(){
    const [projects, setProjects] = useState([])

    function addProject(newProject){
        setProjects([...projects, newProject])
    }


    return (
        <div>
            <h1>Personal Project Showcase App</h1>
        </div>
    )
}

export default LandingPage;