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
                <label className='text-xl font-semibold text-white '>Title</label><br/>
                <input className='peer bg-transparent border-b-2 border-white/10 focus:border-blue-500 outline-none transition-all' value={newProject.title} onChange={e => update('title',e.target.value)}/><br/>
                <label className='text-xl font-semibold text-white'>Description</label><br/>
                <input className=' peer bg-transparent border-b-2 border-white/10 focus:border-blue-500 outline-none transition-all' value={newProject.description} onChange={e => update('description', e.target.value)}/> <br/>

                <button type='submit' className='bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] w-20 rounded-sm p-2 mt-2'>Add</button>

            </form>
            
        </div>
    )
}

export default AddProject;