import { useState } from 'react'



function AddProject({addProject}) {
    const [newProject, setNewProject] = useState({title:'', description:''})

    const update = (field, value) => setNewProject({...newProject, [field]:value})

    function handleSubmit(event){
         event.preventDefault() 

         if(!newProject.title.trim()) return

         addProject({
            id: Date.now(),
            title: newProject.title,
            description : newProject.description
         })
         setNewProject({title:'', description:''})
         }
         
    

    return (
        <div className='relative group p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl transition-all hover:bg-white/20'>
            <h1>Add Project</h1>
            <form onSubmit={handleSubmit}>
                <label className='text-xl font-semibold text-white'>Title</label><br/>
                <input value={newProject.title} onChange={e => update('title',e.target.value)}/><br/>
                <label>Description</label><br/>
                <input value={newProject.description} onChange={e => update('description', e.target.value)}/> <br/>

                <button type='submit'>Add</button>

            </form>
            
        </div>
    )
}

export default AddProject;