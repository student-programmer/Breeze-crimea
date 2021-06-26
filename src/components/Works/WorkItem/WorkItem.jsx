import React from 'react'
import wor from "./Workitem.module.css"

const WorkItem = ({imageUrl}) => {
    return (
        <div className="mine">
            <div>
                <img className={wor.image} src={imageUrl} alt=""/>
            </div>
        </div>
    )
}

export default WorkItem
