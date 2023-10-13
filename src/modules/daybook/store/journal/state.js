import { v4 as uuidv4 } from 'uuid';


export default () => ({
    isLoading: true,
    entries: [
        {
            id: uuidv4(),
            date: new Date().toDateString(),
            text: 'Texto de prueba',
            picture: null
        },
        {
            id: uuidv4(),
            date: new Date().toDateString(),
            text: 'Texto de prueba',
            picture: null
        },
        {
            id: uuidv4(),
            date: new Date().toDateString(),
            text: 'Texto de prueba',
            picture: null
        },
        {
            id: uuidv4(),
            date: new Date().toDateString(),
            text: 'Texto de prueba',
            picture: null
        },
        {
            id: uuidv4(),
            date: new Date().toDateString(),
            text: 'Texto de prueba',
            picture: null
        },
        {
            id: uuidv4(),
            date: new Date().toDateString(),
            text: 'Texto de prueba',
            picture: null
        },
        {
            id: uuidv4(),
            date: new Date().toDateString(),
            text: 'Texto de prueba',
            picture: null
        }
    ]
})