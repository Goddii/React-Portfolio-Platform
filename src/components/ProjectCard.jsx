import { useState } from "react";


function ProjectCard({ project, deleteProject, editProject }) {
    const [isEditing, setIsEditing] = useState(false)
    const [editData, setEditData] = useState({
        title: project.title,
        description: project.description,
    })
}

function handleSave() {
    if(!editData.title.trim()) return;
    editProject(project.id, editData)
    setIsEditing(false)
}