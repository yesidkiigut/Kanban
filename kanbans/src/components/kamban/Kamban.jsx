import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
import mockData from '../../../src/mockData.js';
import { Card } from "../card/Card.jsx"




export function Kamban() {
    const [data, setData] = useState(mockData);
    const onDragEnd = (result) => {
        if (!result.destination) return
        const { source, destination } = result
        if (source.droppableId !== destination.droppableId) {
            const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
            const destiancionColIndex = data.findIndex(e => e.id ===destination.droppableId)
            const sourceCol = data[sourceColIndex]
            const destinationCol = data[destiancionColIndex]

            const sourceTask = [...sourceCol.task]
            const destinationTask =[...destinationCol.task]
            //const sourceTitle = [...sourceCol.title]
            //const destinationTitle =[...destinationCol.title]

            const [remove] = sourceTask.splice(source.index,1)
            //const [add] = 
            destinationTask.splice(destination.index,0,remove)

            data[sourceColIndex].task = sourceTask
            data[destiancionColIndex].task = destinationTask

            setData(data)
        }
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                {data.map((section) =>( 
                  <Droppable key={section.id} droppableId={section.id}>

                  </Droppable>  
                ))}
            </div>
        </DragDropContext>
    )
};
