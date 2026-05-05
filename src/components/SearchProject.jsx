import { useState } from "react";


function SearchProject(){
    const [projectsInfo, setDisplayProject] = useState({name: ' ', description: ' '})



    const update = (field, value) => setDisplayProject({...projectsInfo, [field]:value})


    return(
        <div>
            <input type="text" onChange={(e) => update('name', e.target.value) } placeholder="Search Project..." />
            <p>{projectsInfo}</p>
        </div>
    )
}
export default SearchProject;