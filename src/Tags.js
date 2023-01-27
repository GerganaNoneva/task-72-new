import { useState } from 'react'

function Tags(){
    const [tags, setTags] = useState([
        "boomdotdev", "task", "tags", "react"
    ])
    return (
        <div className="tags">
            { tags.map((tag, index) => (
                    <span className="tag" key={index}>#{tag}</span>
            )) }
        </div>
    )
}

export default Tags
/*
<div className="tags">
            { tags.map((tag, index) => (
                <div className="tag" key={index}>
                    <span className="tag">#{tag}</span>
                </div>
            )) }
        </div>*/