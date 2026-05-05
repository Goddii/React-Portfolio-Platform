import { useState } from 'react'



function AddProject({onAddProject}) {
    const [newProject, setNewProject] = useState({title:'', description:''})

    const update = (field, value) => setNewProject({...newProject, [field]:value})

    function handleSubmit(event){
         event.preventDefault() 

         if(!newProject.title.trim()) return

         onAddProject({
            id: Date.now(),
            title: newProject.title,
            description : newProject.description
         })
         setNewProject({title:'', description:''})
         }
         
    

    return (
        <div>
            <h1>Add Project</h1>
            <form onSubmit={handleSubmit}>
                <label>Title</label><br/>
                <input value={newProject.title} onChange={e => update('title',e.target.value)}/><br/>
                <label>Description</label><br/>
                <input value={newProject.description} onChange={e => update('description', e.target.value)}/> <br/>

                <button type='submit'>Add</button>

            </form>
            
        </div>
    )
}

export default AddProject;