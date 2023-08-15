import { v4 as uuidv4 } from "uuid"
const mockData = [
    {
        id: uuidv4(),
        title: "💻Por hacer",
        task: [
            {
                id: uuidv4(),
                title: "Terminar los cursos de react",
            },
            {
                id: uuidv4(),
                title: "Terminar sql",
            },
            {
                id: uuidv4(),
                title: "Terminar Codigo limpio",
            }
        ]
    },
    {
        id: uuidv4(),
        title: "📝 En progreso...",
        task: [
            {
                id: uuidv4(),
                title: "Curso Python",
            },
            {
                id: uuidv4(),
                title: "Curso React Native",
            }
        ]
    },
    {
        id: uuidv4(),
        title: "✔️- Terminado -✔️",
        task: [
            {
                id: uuidv4(),
                title: "Curso Html y css",
            },
            {
                id: uuidv4(),
                title: "Curso Mysql",
            },
            {
                id: uuidv4(),
                title: "Curso node JS",
            }
        ]
    }
    
];

export default mockData;