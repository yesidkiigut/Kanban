import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
import mockData from '../../../src/mockData.js';
import { Card } from "../card/Card.jsx";
import "../kamban/kamban.scss";




export function Kamban() {
    const [data, setData] = useState(mockData);
    const onDragEnd = (result) => {
        if (!result.destination) return
        const { source, destination } = result
        if (source.droppableId !== destination.droppableId) {

            const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
            const destinationColIndex = data.findIndex(e => e.id ===destination.droppableId)
            const sourceCol = data[sourceColIndex]
            const destinationCol = data[destinationColIndex]

            const sourceTask = [...sourceCol.task]
            const destinationTask =[...destinationCol.task]
            //const sourceTitle = [...sourceCol.title]
            //const destinationTitle =[...destinationCol.title]

            const [remove] = sourceTask.splice(source.index,1)
            //const [add] = 
            destinationTask.splice(destination.index,0,remove)

            data[sourceColIndex].task = sourceTask
            data[destinationColIndex].task = destinationTask

            setData(data)
        }
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='kamban'>
                {data.map((section) =>( 
                  <Droppable key={section.id} droppableId={section.id}>
                        {(provided) =>(
                            <div {...provided.droppableProps}
                            className="kamban-section"
                            ref={provided.innerRef}>
                                <div className='kamban-section-title'>
                                    {section.title}                              
                                </div>
                                <div className='kamban-section-content'>
                                    {section.task.map((task,index)=>(
                                       <Draggable 
                                        key={task.id}
                                        draggableId={task.id}
                                        index={index}>
                                            {(provided,snapshot)=>(
                                                <div 
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                                {...provided.dragHandleProps}
                                                style={
                                                    {...provided.draggableProps.style,opacity: snapshot.isDragging?"0.5":"1"}
                                                }>
                                                    <Card>{task.title}</Card>
                                                </div>
                                            )}
                                       </Draggable> 
                                    ))}
                                </div>
                            </div>
                        )}
                  </Droppable>  
                ))}
            </div>
        </DragDropContext>
    )
};
