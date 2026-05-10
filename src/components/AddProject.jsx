import { useState } from 'react'



function AddProject({addProject}) {
    const [newProject, setNewProject] = useState({title:'', description:''})

    const [error, setError] = useState('')

    const update = (field, value) => setNewProject({...newProject, [field]:value})

    function handleSubmit(event){
         event.preventDefault() 

         if(!newProject.title.trim()) {
            setError('Project title is required here!!!')
            return

         }

         addProject({
            id: Date.now(),
            title: newProject.title,
            description : newProject.description
         })
         setNewProject({title:'', description:''})
         setError('')
         }
         
    

    return (
        <div className='relative group p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl transition-all hover:bg-white/20 w-full'>
            <h1 className='text-xl font-bold text-white mb-2'>Add Project</h1><br/>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-1'>
                    <label className='text-xl font-semibold text-white '>Title</label><br/>
                    <input className='peer bg-transparent border-b-2 border-white/10 focus:border-blue-500 outline-none transition-all w-1/2' placeholder='e.g Portfolio Website' value={newProject.title} onChange={e => update('title',e.target.value)}/><br/> <br/>
                    {error && <p className='text-red-400 text-xs mt-1'>{error}</p>}
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-xl font-semibold text-white'>Description</label><br/>
                    <textarea placeholder='A short description of the project...' className='bg-white/5 border' value={newProject.description} onChange={e => update('description', e.target.value)} /> <br/><br/>
                </div>

                <button type='submit' className='bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] w-20 rounded-sm p-2 mt-2'>Add</button>

            </form>
            
        </div>
    )
}

export default AddProject;