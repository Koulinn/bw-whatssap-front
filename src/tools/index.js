import {format} from 'date-fns'

//* date must be in Coordinated Universal Time (UTC format)
const formatDate = (date) => format(new Date (date), 'H:mm')


const tools ={
    formatDate: formatDate
}

export default tools