import { useState } from "react";


function SearchProject({projects}){
    const [query, setQuery] = useState('')

    const filtered = projects.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase()))



    return(
        <div>
            <input value={query} onChange={(e) => setQuery(e.target.value) } placeholder="Search Project..." />
            
            {projects.length === 0 ? (
                <p>No projects yet.Add one above</p>
            ):(<ul>
                {filtered.map(project => (<li key={project.id}>
                    <strong>{project.title}</strong>
                    <p>{project.description}</p>
                </li>))}
            </ul>)}
        </div>
    )
}
export default SearchProject;