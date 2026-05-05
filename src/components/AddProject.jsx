import { useState } from 'react'



function AddProject() {
    const [newProject, setNewProject] = useState({name:'', description:''})

    function handleSubmit(event){
         event.preventDefault()  
         return 
    }

    return (
        <div>
            <h1>Add Project</h1>
            <form onSubmit={handleSubmit}>
                <label>Title</label><br/>
                <input onChange={e => setNewProject(e.target.value)}/><br/>
                <label>Description</label><br/>
                <input onChange={e => setNewProject(e.target.value)}/> <br/>

                <button type='submit'>Add</button>

            </form>
            
        </div>
    )
}

export default AddProject;