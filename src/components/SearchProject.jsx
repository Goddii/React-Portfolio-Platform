import { useState } from "react";


function SearchProject({projects}){
    const [query, setQuery] = useState('')

    const filtered = projects.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase()))



    return(
        <div className="w-full">
            <input className='w-full px-4 py-2 rounded-full bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500 outline-none' value={query} onChange={(e) => setQuery(e.target.value) } placeholder="Search Project..." />
            
            {projects.length === 0 ? (
                <p className='italic text-slate-400 animate-pulse mt-2 p-2 text-pretty'>No projects yet.Add one above</p>
            ):(<ul>
                {filtered.map(project => (<li className="p-4 mb-3 mt-3 rounded-xl bg-white/10 border border-white/20 hover:border-blue-500/50 transition-colors " key={project.id}>
                    <strong className="text-cyan-400">{project.title}</strong>
                    <p className="text-pretty" className='text-slate-300' text>{project.description}</p>
                </li>))}
            </ul>)}
        </div>
    )
}
export default SearchProject;